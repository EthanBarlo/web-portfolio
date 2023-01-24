<script lang="ts">
	import DateDisplay from '$lib/components/DateDisplay.svelte';
	import Tags from '$lib/components/Tags.svelte';
	export let data: App.ProjectData;
</script>

<a href={`/projects/${data.slug}`}>
	<article
		class="w-40 border-lavender-800 bg-lavender-300 hover:bg-lavender-200 transition-all border-2 rounded-md p-2 hover:scale-105 hover:border-lavender-900"
	>
		<h2>{data.title}</h2>
		<DateDisplay data={data.date} />
		<Tags data={data.tags} limit={3} />
	</article>
</a>
