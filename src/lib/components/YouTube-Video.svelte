<script lang="ts">
	export let videoId: string;
	export let title: string;
</script>

<iframe
	class="w-full aspect-video overflow-hidden rounded-lg"
	src={`https://www.youtube.com/embed/${videoId}`}
	{title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>
