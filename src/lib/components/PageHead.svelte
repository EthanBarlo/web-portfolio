<script lang="ts">
	export let title: string;
	export let description: string;

	const siteTitle = "Ethan's Portfolio";
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<link href="/css/prism-theme.css" rel="stylesheet" />
</svelte:head>
