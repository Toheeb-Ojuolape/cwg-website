<script lang="ts">
	import type { FooterData } from '$lib/types/footer-types';

	export let title: string;
	export let list: FooterData['community_links']['data'];
</script>

<div>
	<h6 class="text-headline-6 text-greyish-blue mb-3 lg:mb-5">{title}</h6>
	<ul class="text-white text-body-s">
		{#each list as { attributes: { title, slug } }}
			<li>
				<a href={slug}>{title}</a>
			</li>
		{/each}
	</ul>
</div>
