<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
</script>

<svelte:head />

<div>
	<Nav />

	<main>
		<slot />
	</main>

	<Footer />
</div>
