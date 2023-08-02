<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { FooterData } from '$lib/types/footer-types';

	export let title: string;
	export let list: FooterData['policy_links']['data'];
</script>

<div>
	<h6 class="text-headline-6 text-greyish-blue mb-3 lg:mb-5">{title}</h6>
	<ul class="text-white text-body-s">
		{#each list as { attributes: { file, title, slug } }}
			<li>
				<a
					href={file.data.length > 0
						? `${CMS_URL}${file.data[0].attributes.url}`
						: `/${slug}`}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
