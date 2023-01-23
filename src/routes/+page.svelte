<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';
</script>

<main class="font-charm">
	<div class="grid grid-cols-2 border-b-2 border-lavendar-900 overflow-hidden">
		<section>
			<h1 class="text-3xl">Hey there!</h1>
			<br />
			<p>
				I'm a Software Engineer studying at Sheffield Hallam University, Currently working as a
				Full-Stack Developer at <a
					href="https://www.bemoresocial.co.uk"
					class="text-lavender-900 transition-all relative overflow-hidden after:w-full after:h-[0.10rem] after:content-[''] after:bg-lavender-900 after:absolute after:bottom-0 after:-left-full hover:after:translate-x-full after:transition-all"
					>BeMoreSocial</a
				>.
			</p>
			<p>
				Throughout this website you will find a selection of my projects and experiences that
				showcase my skills and interest in Software Development. Each project demonstrates my
				ability to solve problems and develop high-quality code.
			</p>
		</section>
		<section>
			<img class="rounded" src="/images/headshot-transparent.png" alt="" />
		</section>
	</div>

	<p>
		Throughout my studies, personal projects and work, I have developed a strong understanding in
		programming languages such as:
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
