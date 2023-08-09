<script lang="ts">
	import { format } from 'date-fns';
	import PressRelease from '../../insights/PressRelease.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';
	import { onMount } from 'svelte';

	export let data: PageData;

	let locationHref = '';

	$: content = data.article;

	onMount(function () {
		locationHref = window.location.href;
	});
</script>

<section class="section-container pt-10 pb-10">
	<button on:click={() => history.back()} class="back-arr">
		<img src="/images/bright-blue-long-arrow.svg" alt="bright-blue-long-arrow" />
	</button>

	<h2 class="blog-title text-[46px] leading-[58px] sm:text-[52px] sm:leading-[60px] my-[10px] lg:max-w-[80%]">
		{content.title}
	</h2>

	<div class="text-[18px]">
		By {content.author.data.attributes.name} •
		<span class="text-bright-blue"
			>{content.article_date
				? format(new Date(content.article_date), 'MMMM dd yyyy')
				: ''}</span
		>
		• {content.read_duration_mins} mins
	</div>

	<div class="social-icon-wrapper flex gap-[20px] items-center my-[15px]">
		<a
			href={`https://www.facebook.com/sharer/sharer.php?u=${locationHref}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-facebook.svg" alt="facebook" class="w-[12px]" />
		</a>
		<a
			href={`https://www.linkedin.com/shareArticle?url=${locationHref}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-linkedin.svg" alt="linkedin" class="w-[24px]" />
		</a>
		<a
			href={`https://twitter.com/intent/tweet?text=Your%20Text&url=${locationHref}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-twitter.svg" alt="twitter" class="w-[26px]" />
		</a>
	</div>

	<div class="featured-img-wrapper py-[50px]">
		<img
			src={CMS_URL + content.image.data?.attributes.url}
			class="w-full aspect-auto object-cover max-h-[500px] h-full"
			alt="featured-img"
		/>
	</div>

	{#if content.content}
		<div class="featured-text-content text-[22px]">
			<div class="[&_p]my-5">{@html content.content}</div>
		</div>
	{/if}

	{#if content.author.data.attributes.description}
		<hr class="gray-line mt-[50px] mb-[30px]" />

		<div class="about-cwg-section max-w-[690px]">
			<h3 class="text-bright-blue text-[24px] mb-[15px]">
				About {content.author.data.attributes.name}
			</h3>

			<div class="[&_p]:text-[18px]">{@html content.author.data.attributes.description}</div>
		</div>
	{/if}
</section>

{#if content.related_articles.data.length > 0}
	<section id="press" class="press-release pt-20 pb-10 section-container">
		<div class="">
			<h2 class="text-headline-2">Related stories</h2>
		</div>

		<div class="py-10">
			<PressRelease newsThumbails={content.related_articles.data} />
		</div>
	</section>
{/if}

<style>
	.blog-title {
		letter-spacing: -2px;
	}
</style>
