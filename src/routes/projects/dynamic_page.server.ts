import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';

export const load: PageServerLoad = async ({ url }) => {
	const page_number = url.searchParams.get('page') || '0';
	const selected_tag = url.searchParams.get('tag') || null;

	const projects_glob = import.meta.glob(`/src/projects/*.{md,svx,svelte.md}`);

	const project_promises = Object.entries(projects_glob).map(([path, resolver]) =>
		resolver().then((project) => ({
			slug: slugFromPath(path),
			...(project as unknown as App.MdsvexFile).metadata
		}))
	);

	let projects = (await Promise.all(project_promises)) as unknown as App.ProjectData[];

	if (selected_tag) {
		projects = projects.filter(
			(project) => project.published && project.tags.includes(selected_tag)
		);
	} else {
		projects = projects.filter((project) => project.published);
	}

	projects.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
	const total_projects = projects.length;

	const projects_per_page = 10;
	const starting_page = Number.parseInt(page_number) * projects_per_page;
	return {
		// projects: projects.slice(starting_page, projects_per_page),
		projects,
		total_projects
	};
};
