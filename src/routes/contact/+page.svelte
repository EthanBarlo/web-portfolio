<script lang="ts">
	import { enhance } from '$app/forms';
	let name: string;
	let email: string;
	let message: string;
</script>

<main class="font-charm">
	<h1>Contact Page</h1>
	<p />

	<form
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
				class="bg-lavender-100 rounded-lg p-1 border-lavender-600 border focus:border-2 focus:outline-none"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full"
			>Email:
			<input
				type="email"
				name="email"
				bind:value={email}
				class="bg-lavender-100 rounded-lg p-1 border-lavender-600 border focus:border-2 focus:outline-none"
			/>
		</label>
		<label class="flex flex-col gap-1 w-full"
			>Message:
			<textarea
				name="message"
				bind:value={message}
				class="bg-lavender-100 rounded-lg p-1 border-lavender-600 border focus:border-2 focus:outline-none"
			/>
		</label>
		<button
			type="submit"
			class="py-1 px-3 text-lg bg-lavender-700 rounded-lg text-white hover:scale-105 transition-all"
			>Send</button
		>
	</form>
</main>
