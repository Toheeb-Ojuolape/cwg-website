<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
</script>

<svelte:head>
	<script>
		function changeTheme(isDark = false) {
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}

		changeTheme(
			localStorage.theme === 'dark' ||
				(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (!localStorage.theme) {
				changeTheme(e.matches);
			}
		});
	</script>
</svelte:head>

<div>
	<Nav />

	<main>
		<div class="h-[116px]" />
		<slot />
	</main>

	<Footer />
</div>
