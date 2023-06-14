<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head />

<div>
	<main>
		<slot />
	</main>

	<Footer />
</div>
