<script>
</script>

<div
	class="wavy-wrapper -ml-6 w-[calc(100%+3rem)] -my-3 bg-gradient-to-r from-transparent to-lavender-400"
>
	<div class="content py-14 mx-6">
		<slot />
	</div>
</div>

<style>
	.wavy-wrapper {
		position: relative;
		--mask: radial-gradient(60.47px at 50% 82.5px, #000 99%, #0000 101%) calc(50% - 60px) 0/120px
				51% repeat-x,
			radial-gradient(60.47px at 50% -52.5px, #0000 99%, #000 101%) 50% 30px/120px calc(51% - 30px)
				repeat-x,
			radial-gradient(60.47px at 50% calc(100% - 82.5px), #000 99%, #0000 101%) calc(50% - 60px)
				100%/120px 51% repeat-x,
			radial-gradient(60.47px at 50% calc(100% + 52.5px), #0000 99%, #000 101%) 50%
				calc(100% - 30px) / 120px calc(51% - 30px) repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
		overflow: hidden;
	}
</style>
