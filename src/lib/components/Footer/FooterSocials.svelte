<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { SocialMediaHandles } from '$lib/types/footer-types';

	export let socialLinks: SocialMediaHandles['data'];
</script>

<div class="flex gap-4 items-center justify-center">
	{#each socialLinks as { attributes: { icon, link, name } }}
		<a target="_blank" href={link}>
			<img src={CMS_URL + icon.data?.attributes.url} alt={name} />
		</a>
	{/each}
</div>
