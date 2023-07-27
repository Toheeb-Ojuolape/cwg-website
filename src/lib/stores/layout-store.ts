import type { MoreAboutUs } from '$lib/types/more-about-us-types';
import { writable } from 'svelte/store';

interface LayoutStoreState {
	moreAboutUs: MoreAboutUs;
}

function layoutStore() {
	const { subscribe, set } = writable({} as LayoutStoreState);

	return {
		subscribe,
		setMoreAboutUs: (data: MoreAboutUs) => set({ moreAboutUs: data })
	};
}

export const mainLayoutStore = layoutStore();
