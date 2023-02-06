<script lang="ts">
	import { enhance } from '$app/forms';
	let name: string;
	let email: string;
	let message: string;
</script>

<main class="font-charm">
	<h1>Contact Page</h1>
	<p>This page is currently a work in porgress...</p>
	<p>
		Please contact me at - <a
			class="text-lavender-800 transition-all relative overflow-hidden after:w-0 after:h-[0.10rem]  after:bg-lavender-600 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
			href="mailto:ethanbar266@gmail.com"
			target="_blank">ethanbar266@gmail.com</a
		>
	</p>

	<!-- <form
		class="flex flex-col gap-3 items-center justify-center max-w-lg m-auto"
		method="post"
		use:enhance
	>
		<label class="flex flex-col gap-1 w-full"
			>Name:
			<input
				type="text"
				name="name"
				bind:value={name}
				class="bg-lavender-100 rounded-lg p-1 border-lavender-600 border focus:border-2 focus:outline-none font-sans text-sm"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full"
			>Email:
			<input
				type="email"
				name="email"
				bind:value={email}
				class="bg-lavender-100 rounded-lg p-1 border-lavender-600 border focus:border-2 focus:outline-none font-sans text-sm"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full"
			>Message:
			<textarea
				name="message"
				bind:value={message}
				class="bg-lavender-100 rounded-lg p-1 border-lavender-600 border focus:border-2 focus:outline-none font-sans text-sm"
			/>
		</label>
		<button
			type="submit"
			class="py-1 px-3 text-lg bg-lavender-700 rounded-lg text-white hover:scale-105 transition-all"
			>Send</button
		>
	</form> -->
</main>
