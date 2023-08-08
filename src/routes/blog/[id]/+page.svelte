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

<section class="section-container pt-10">
	<a href="/insights" class="back-arr">
		<img src="/images/bright-blue-long-arrow.svg" alt="bright-blue-long-arrow" />
	</a>

	<div class="tags flex flex-wrap gap-[15px] mt-[30px]">
		{#each data.blog.blog_categories.data as { attributes: { name } }}
			<span>{name}</span>
		{/each}
	</div>

	<h2 class="blog-title text-[48px] leading-[61px] sm:text-[64px] sm:leading-[77px]">
		{data.blog.title}
	</h2>

	<div class="text-[18px]">
		By {data.blog.blog_author.data.attributes.name} •
		<span class="text-bright-blue"
			>{data.blog.date_published
				? format(new Date(data.blog.date_published), 'MMMM dd yyyy')
				: ''}</span
		>
		<!-- • {3} mins -->
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
		<img src={CMS_URL + data.blog.cover_image.data?.attributes.url} alt="featured-img" />
	</div>

	<div class="featured-quoted-text bg-midnight-blue text-white px-[40px] py-[30px] text-[22px]">
		{data.blog.preface}
	</div>

	<div class="featured-text-content text-[22px]">
		<p class="my-5">{@html data.blog.content}</p>
		<!-- <h2 class="text-bright-blue max-w-[603px] text-[32px] py-[20px] leading-[42px]">
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
		</h2> -->
	</div>

	<hr class="gray-line mt-[50px] mb-[30px]" />

	<div class="about-cwg-section max-w-[690px]">
		<h3 class="text-bright-blue text-[24px] mb-[15px]">
			About {data.blog.blog_author.data.attributes.name}
		</h3>
		<p class="text-[18px]">
			CWG is a Pan-African systems solutions company which specializes in a wide array of IT
			services including: communications, and integration services, infrastructure services,
			managed and support services, cloud services, and software.
		</p>
	</div>
</section>

<section id="press" class="press-release pt-20 pb-10 section-container">
	<div class="">
		<h2 class="text-headline-2">Related stories</h2>
	</div>

	<div class="py-10">
		<PressRelease newsThumbails={data.blog.related_stories.data} />
	</div>
</section>

<style>
	.blog-title {
		letter-spacing: -2px;
	}
</style>
