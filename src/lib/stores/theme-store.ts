import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function themeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	return {
		subscribe,
		toggle: () => update((current: Theme) => (current === 'light' ? 'dark' : 'light')),
		setTheme: (theme: Theme) => set(theme)
	};
}

export const theme = themeStore();
