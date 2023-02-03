<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';
	import Wavy from '$lib/components/Wavy.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<main class="font-charm">
	<div class="flex flex-col-reverse sm:flex-row overflow-hidden">
		<section>
			<h1 class="text-3xl mb-2 mt-1 text-lavender-800">Hey there!</h1>
			<p>
				I'm a Software Engineer who is passionate about building applications, whether they be web,
				mobile or desktop. Most of my current work is centered around the web platform, and I am
				looking into exploring desktop development in the near future.
			</p>
			<p>
				Please explore my website to learn more about me, my projects and my experience. And check
				out some of my other socials below.
			</p>
			<SocialLinks All />
		</section>
		<section class="h-full">
			<img
				class="m-auto hidden sm:block"
				src="/images/headshot-transparent.png"
				width="1200"
				height="1200"
				alt=""
			/>
		</section>
	</div>

	<Wavy>
		<p>
			Throughout my personal projects and professional work, I have gained experience using the
			following technologies:
		</p>
		<Tags
			data={[
				'HTML / CSS / JavaScript',
				'React / Svelte',
				'NextJS / SvelteKit / Astro',
				'C# / Rust / Java',
				'Xamarin'
			]}
		/>
		<p>
			Although most of my experience is with web development, I am also interested in other areas
			such as desktop and mobile development. I have a keen interest in <a
				href="https://tauri.app/"
				class="text-lavender-800 transition-all relative overflow-hidden after:w-0 after:h-[0.10rem]  after:bg-lavender-600 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
				>Tauri</a
			> and plan to use it to build my final project at University.
		</p>
	</Wavy>

	<h3 class="text-xl text-lavender-900">Experience</h3>
	<Timeline
		data={[
			{
				date: 'April 2022 - Present',
				title: 'Full-Stack Developer at BeMoreSocial',
				description:
					'Working to improve the BeMoreSocial platform and create new features. Also using my experience from University to help improve development practices.'
			},
			{
				date: 'September 2020 - Present',
				title: 'Studying Software Engineering at Sheffield Hallam University',
				description:
					'Learning about various software development practices and methodologies. And gaining experience using a variety of technologies, focusing on all aspects of the software development lifecycle.'
			},
			{
				date: 'September 2022 - February 2023',
				title: 'Study Abroad at Reutlingen University in Germany',
				description:
					'Learning about German culture and language, and gaining experience working in another country. I studied modules in Cloud, Web and Distributed Systems to gain a better understanding of the software development lifecycle. Alongside this, I also worked part time at BeMoreSocial.'
			}
		]}
	/>

	<p>
		I am always looking for new opportunities to learn and grow as a Software Engineer. Please don't
		hesitate to reach out to me if you have any questions or would like to collaborate on a project.
	</p>
	<p>Thank you for visiting my portfolio!</p>
</main>
