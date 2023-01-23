<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
	import PageHead from '$lib/components/PageHead.svelte';
	import Tags from '$lib/components/Tags.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	const component = data.component as unknown as C;
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<Tags data={data.frontmatter.tags} linkTo="projects" />

<svelte:component this={component} />
