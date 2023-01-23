<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';
</script>

<main class="font-charm">
	<div class="flex flex-col-reverse sm:flex-row border-b-2 border-lavendar-900 overflow-hidden">
		<section>
			<h1 class="text-3xl mb-2 mt-1">Hey there!</h1>
			<p>
				I'm a Software Engineer studying at Sheffield Hallam University, Currently working as a
				Full-Stack Developer at <a
					href="https://www.bemoresocial.co.uk"
					class="text-lavender-800 transition-all relative overflow-hidden after:w-0 after:h-[0.10rem]  after:bg-lavender-600 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
					>BeMoreSocial</a
				>.
			</p>
			<p>
				Throughout this website you will find a selection of my projects and experiences that
				showcase my skills and interest in Software Development. Although I might have a pretty
				website, I am not a UI designer. So please excuse any oddities you may find.
			</p>
		</section>
		<section>
			<img
				class="rounded m-auto hidden sm:block"
				src="/images/headshot-transparent.webp"
				width="1200"
				height="1200"
				alt=""
			/>
		</section>
	</div>

	<p>
		Throughout my studies, personal projects and work, I have developed a strong understanding in
		the following programming languages and frameworks:
	</p>
	<Tags
		data={[
			'HTML / CSS / JavaScript',
			'React / Svelte',
			'NextJS / SvelteKit / Astro',
			'C# / Rust / Java'
		]}
	/>
	<p>
		I am always looking for new opportunities to learn and grow as a Software Engineer. Please don't
		hesitate to reach out to me if you have any questions or would like to collaborate on a project.
	</p>
	<p>Thank you for visiting my portfolio!</p>
</main>
