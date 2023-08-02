<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import { theme } from '$lib/stores/theme-store';
	import type { ServiceEsteemedClients } from './types';

	export let esteemedClients: ServiceEsteemedClients['data'];
</script>

<section class="box-container mx-auto pt-10 pb-20">
	<div class="flex flex-wrap gap-[40px] max-w-[1380px] m-auto justify-center px-5">
		{#each esteemedClients as { attributes: { logo, logo_dark, name } }}
			<img
				src={CMS_URL +
					($theme === 'light'
						? logo.data?.attributes?.url
						: logo_dark.data?.attributes?.url ?? logo.data?.attributes?.url)}
				alt={name}
				class="bank-img"
			/>
		{/each}
	</div>
</section>
