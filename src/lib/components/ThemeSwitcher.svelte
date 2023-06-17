<script lang="ts">
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme-store';
	import ThemeToggleIcon from './Svgs/ThemeToggleIcon.svelte';

	let isDarkMode = false;

	$: theme.setTheme(isDarkMode ? 'dark' : 'light');

	function toggleDarkMode({ isDark = false }) {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function onChangeThemeMode() {
		isDarkMode = !isDarkMode;
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		toggleDarkMode({ isDark: isDarkMode });
	}

	if (browser) {
		const storedTheme = localStorage.getItem('theme');
		isDarkMode = !storedTheme
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: localStorage.getItem('theme') === 'dark';

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (!storedTheme) {
				isDarkMode = e.matches;
			}
		});
	}
</script>

<button on:click={onChangeThemeMode}>
	<div
		class:-scale-x-100={isDarkMode}
		class:scale-x-100={!isDarkMode}
		class="transition-all duration-500"
	>
		<ThemeToggleIcon />
	</div>
</button>
