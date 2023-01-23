<script lang="ts">
	export let data: string[];
	export let linkTo: string = '';
</script>

<ul class="flex gap-1 flex-wrap text-sm">
	{#each data as tag}
		<li>
			{#if linkTo === ''}
				<span class="bg-amber-50 border border-lavender-600 py-1 px-3 rounded-full">{tag}</span>
			{:else}
				<a
					class="bg-amber-50 border border-lavender-600 py-1 px-3 rounded-full"
					href={`/${linkTo}?tag=${tag}`}>{tag}</a
				>
			{/if}
		</li>
	{/each}
</ul>
