<script lang="ts">
	import ProjectCard from './projectCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="font-charm">
	<h1 class="text-xl">My Projects</h1>
	<p>Please checkout some of my latest projects:</p>
	<div class="my-4" />

	<section class="flex flex-wrap gap-3">
		{#each data.projects as project}
			<ProjectCard data={project} />
		{/each}
	</section>
</main>
