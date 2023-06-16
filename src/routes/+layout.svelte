<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
</script>

<svelte:head />

<div>
	<Nav />

	<main>
		<div class="h-[116px]" />
		<slot />
	</main>

	<Footer />
</div>
