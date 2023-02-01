<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
	import PageHead from '$lib/components/PageHead.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import DateDisplay from '$lib/components/DateDisplay.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	const component = data.component as unknown as C;
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />

<h1 class="text-2xl w-fit m-auto">{data.frontmatter.title}</h1>
<DateDisplay data={data.frontmatter.date} class="m-auto w-fit text-sm text-lavender-600" />
<Tags data={data.frontmatter.tags} linkTo="projects" class="w-fit m-auto mt-2" />
<div id="postContainer">
	<svelte:component this={component} />
</div>
