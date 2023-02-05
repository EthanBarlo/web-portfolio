<script>
	export let href = '#';
</script>

<a
	{href}
	class="p-2 bg-lavender-700 hover:bg-lavender-600 transition-all text-white rounded-lg w-fit my-2 block m-auto"
>
	<slot />
</a>
