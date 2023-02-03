<script lang="ts">
	import { page } from '$app/stores';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import '../global.css';

	const navElements = [
		{ name: 'Contact', href: '/contact' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'About', href: '/' }
	];

	$: activePath = '/' + $page.url.pathname.split('/')[1];
</script>

<div class="bg-lavender-100 p-6 pl-2 min-h-screen">
	<div class="flex flex-row items-start justify-start relative max-w-3xl mx-auto">
		<section class="w-12 h-[480px] sticky top-0 z-50">
			<nav class="flex w-fit -rotate-90 translate-y-[200px] -translate-x-[40.5%]">
				{#each navElements as element}
					<a
						href={element.href}
						class={`relative -mr-8 w-32 ${element.href === activePath ? 'z-20 active' : 'z-10'}`}
					>
						<img
							src={element.href === activePath ? '/tab-bg.svg' : '/tab-bg-default.svg'}
							alt=""
							class="h-12"
						/>
						<span
							class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-lg font-charm"
						>
							{element.name}
						</span>
					</a>
				{/each}
			</nav>
		</section>
		<section
			class="border-2 border-lavender-900 rounded-lg p-6 bg-lavender-200 h-fit min-h-[400px] w-full relative z-0 overflow-hidden"
		>
			<slot><!-- optional fallback --></slot>
		</section>
	</div>
	<footer class="w-fit m-auto mt-4 flex flex-col justify-center items-center">
		<SocialLinks All />
		<a href="/CV.pdf" class="text-sm hover:underline font-charm">Download my CV</a>
	</footer>
</div>
