<script lang="ts">
	import '../app.css';
	import '../styles.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
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
	<Nav nav={data.nav} />

	<main>
		<div class:h-[116px]={$page.url.pathname !== '/'} />
		<slot />
	</main>

	<Footer />
</div>
