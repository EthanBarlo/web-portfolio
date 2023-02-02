<script lang="ts">
	type TimelineItem = {
		date: string;
		title: string;
		description: string;
		link?: string;
	};
	export let data: TimelineItem[];
</script>

<ol class="relative border-l border-lavender-600">
	{#each data as item}
		<li class="mb-6 ml-4">
			<div
				class="absolute w-3 h-3 bg-lavender-600 rounded-full mt-1.5 -left-1.5 border border-lavender-700"
			/>
			<time class="mb-1 text-sm font-normal leading-none text-lavender-600">{item.date}</time>
			<h3 class="text-lg font-semibold text-gray-900">
				{item.title}
			</h3>
			<p class="mb-4 text-base font-normal text-gray-700">
				{item.description}
			</p>
			{#if item.link}
				<a
					href={item.link}
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-lavender-500 hover:text-white focus:z-10 focus:ring-2 focus:outline-none focus:ring-lavender-600"
					>Learn more <svg
						class="w-3 h-3 ml-2"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					></a
				>
			{/if}
		</li>
	{/each}
</ol>
