import type { LayoutLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';

interface ProjectData {
	slug: string;
	title: string;
	tags: string[];
	description: string;
	date: string;
	published: boolean;
}

export const load = (async ({ params }) => {
	const modules = import.meta.glob(`/src/projects/*.{md,svx,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	return {
		component: post.default,
		frontmatter: post.metadata as unknown as ProjectData
	};
}) satisfies LayoutLoad;
