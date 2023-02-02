<script lang="ts">
	type LinkToType = '' | 'projects';
	const empty_string = '';
	export let data: string[];
	export let linkTo: LinkToType = empty_string;
	export let limit: number = Number.POSITIVE_INFINITY;
	let extras = { ...$$restProps };

	let has_been_sliced = false;
	if (data.length > limit) {
		data = data.slice(0, limit);
		has_been_sliced = true;
	}
</script>

<ul class={`flex gap-1 flex-wrap text-sm ${extras.class || ''}`}>
	{#each data as tag}
		<li class="bg-amber-50 border border-lavender-600 py-1 px-2 rounded-full text-sm">
			{#if linkTo === empty_string}
				{tag}
			{:else}
				<a href={`/${linkTo}?tag=${tag}`}>
					{tag}
				</a>
			{/if}

			{#if has_been_sliced}
				...
			{/if}
		</li>
	{/each}
</ul>
