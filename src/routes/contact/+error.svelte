<script>
	import { page } from '$app/stores';
</script>

<h1>Error encountered.</h1>
<p>{$page.error?.message || 'Unknown issue'}</p>
