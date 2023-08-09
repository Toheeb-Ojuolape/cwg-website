<script lang="ts">
	import { format } from 'date-fns';
	import PressRelease from '../../insights/PressRelease.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	let blogShareableLink = '';

	onMount(function () {
		blogShareableLink = window.location.href;
	});
</script>

<section class="section-container pt-10" class:pb-10={data.blog.related_stories.data.length < 1}>
	<button on:click={() => history.back()} class="back-arr">
		<img src="/images/bright-blue-long-arrow.svg" alt="bright-blue-long-arrow" />
	</button>

	<div class="tags flex flex-wrap gap-[15px] mt-[30px]">
		{#each data.blog.blog_categories.data as { attributes: { name } }}
			<span>{name}</span>
		{/each}
	</div>

	<h2 class="blog-title text-[46px] leading-[58px] sm:text-[52px] sm:leading-[60px] my-[10px] lg:max-w-[80%]">
		{data.blog.title}
	</h2>

	<div class="text-[18px]">
		By {data.blog.blog_author.data.attributes.name} •
		<span class="text-bright-blue"
			>{data.blog.date_published
				? format(new Date(data.blog.date_published), 'MMMM dd yyyy')
				: ''}</span
		>
		{#if data.blog.read_duration_mins}
			• {data.blog.read_duration_mins} mins
		{/if}
	</div>

	<div class="social-icon-wrapper flex gap-[20px] items-center my-[15px]">
		<a
			href={`https://www.facebook.com/sharer/sharer.php?u=${blogShareableLink}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-facebook.svg" alt="facebook" class="w-[12px]" />
		</a>
		<a
			href={`https://www.linkedin.com/shareArticle?url=${blogShareableLink}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-linkedin.svg" alt="linkedin" class="w-[24px]" />
		</a>
		<a
			href={`https://twitter.com/intent/tweet?text=Your%20Text&url=${blogShareableLink}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/images/share-twitter.svg" alt="twitter" class="w-[26px]" />
		</a>
	</div>

	<div class="featured-img-wrapper py-[50px]">
		<img
			src={CMS_URL + data.blog.cover_image.data?.attributes.url}
			class="w-full max-h-[500px] h-full"
			alt="featured-img"
		/>
	</div>

	{#if data.blog.preface}
		<div
			class="featured-quoted-text bg-midnight-blue text-white px-[40px] py-[30px] text-[22px]"
		>
			{data.blog.preface}
		</div>
	{/if}

	{#if data.blog.content}
		<div class="featured-text-content text-[22px]">
			<p class="my-5">{@html data.blog.content}</p>
			<!-- <h2 class="text-bright-blue max-w-[603px] text-[32px] py-[20px] leading-[42px]">
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
		</h2> -->
		</div>
	{/if}

	<hr class="gray-line mt-[50px] mb-[30px]" />

	<div class="about-cwg-section max-w-[690px]">
		<h3 class="text-bright-blue text-[24px] mb-[15px]">
			About {data.blog.blog_author.data.attributes.name}
		</h3>
		<div class="[&_p]:text-[18px]">
			{@html data.blog.blog_author.data.attributes.description}
		</div>
	</div>
</section>

{#if data.blog.related_stories.data.length > 0}
	<section id="press" class="press-release pt-20 pb-10 section-container">
		<div class="">
			<h2 class="text-headline-2">Related stories</h2>
		</div>

		<div class="py-10">
			<PressRelease newsThumbails={data.blog.related_stories.data} />
		</div>
	</section>
{/if}

<style>
	.blog-title {
		letter-spacing: -2px;
	}
</style>
