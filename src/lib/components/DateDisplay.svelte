<script lang="ts">
	export let data: string;
	let extras = { ...$$restProps };

	const date = new Date(data);
</script>

<p class="text-sm text-lavender-800" {...extras}>
	{date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})}
</p>
