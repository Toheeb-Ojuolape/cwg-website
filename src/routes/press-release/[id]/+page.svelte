<script lang="ts">
	import { format } from 'date-fns';
	import PressRelease from '../../insights/PressRelease.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	$: content = data.article;
</script>

<section class="section-container pt-10">
	<a href="/insights" class="back-arr">
		<img src="/images/bright-blue-long-arrow.svg" alt="bright-blue-long-arrow" />
	</a>

	<h2 class="blog-title text-[48px] leading-[61px] sm:text-[64px] sm:leading-[77px]">
		{content.title}
	</h2>

	<div class="text-[18px]">
		By CWG • <span class="text-bright-blue"
			>{content.article_date
				? format(new Date(content.article_date), 'MMMM dd yyyy')
				: ''}</span
		>
		• {content.read_duration_mins} mins
	</div>

	<div class="social-icon-wrapper flex gap-[20px] items-center my-[15px]">
		<a
			href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-facebook.svg" alt="facebook" class="w-[12px]" />
		</a>
		<a
			href={`https://www.linkedin.com/shareArticle?url=${window.location}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-linkedin.svg" alt="linkedin" class="w-[24px]" />
		</a>
		<a
			href={`https://twitter.com/intent/tweet?text=Your%20Text&url=${window.location}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-twitter.svg" alt="twitter" class="w-[26px]" />
		</a>
	</div>

	<div class="featured-img-wrapper py-[50px]">
		<img
			src={CMS_URL + content.image.data?.attributes.url}
			class="w-full aspect-auto"
			alt="featured-img"
		/>
	</div>

	{#if content.content}
		<div class="featured-text-content text-[22px]">
			<div class="[&_p]my-5">{@html content.content}</div>
		</div>
	{/if}

	<hr class="gray-line mt-[50px] mb-[30px]" />

	<div class="about-cwg-section max-w-[690px]">
		<h3 class="text-bright-blue text-[24px] mb-[15px]">About CWG</h3>
		<p class="text-[18px]">
			CWG is a Pan-African systems solutions company which specializes in a wide array of IT
			services including: communications, and integration services, infrastructure services,
			managed and support services, cloud services, and software.
		</p>
	</div>
</section>

<!-- <section id="press" class="press-release pt-20 pb-10 section-container">
	<div class="">
		<h2 class="text-headline-2">Related stories</h2>
	</div>

	<div class="py-10">
		<PressRelease />
	</div>
</section> -->

<style>
	.blog-title {
		letter-spacing: -2px;
	}
</style>
