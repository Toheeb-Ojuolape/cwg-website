<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import type { FifthlabResponse } from './types';

	export let products: FifthlabResponse['fifthlab_products']['data'];
</script>

{#each products as { attributes: { image, description, link, link_text, logo, name } }}
	<div class="fifthlab-product-block m-auto">
		<div class="grid bg-whitish-blue dark:bg-dark-highlight">
			<div class="produt-img-side relative bg-midnight-blue">
				<img src={CMS_URL + image.data.attributes.url} alt={name} class="product-img" />
			</div>
			<div class="produt-txt-side sm:py-10 py-7 px-8 sm:px-15">
				<div class="products-logo-wrapper">
					<img
						src={CMS_URL + logo.data.attributes.url}
						alt={name}
						class="products-logo"
					/>
				</div>
				<p class="products-desc pt-3 pb-8">{@html description}</p>
				<a href={`${link}`} target="_blank" class="flex gap-5 text-lg max-w-[170px]">
					<span>{link_text}</span>
					<div class="arrow-right">
						<ArrowRightLong strokeClassName="stroke-blue" />
					</div>
				</a>
			</div>
		</div>
	</div>
{/each}
