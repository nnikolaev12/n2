<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>

</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<header class="small-header">
	<div class="background-image" style="background-image:url(img/background.jpg)">
		<div class="overlay"></div>
	</div>

	<div class="header-text">
		<h1>{status}</h1>
		<h2>{error.message}</h2>
	</div>
</header>
<div class="container">
	<p>Ops... something went wrong. Please, head back to where you came from or just navigate to the <a href=".">HOME</a> page.</p>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>