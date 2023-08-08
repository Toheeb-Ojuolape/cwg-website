<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import { format } from 'date-fns';
	import type { InsightsPageData } from './types';

	export let list: InsightsPageData['blogs_section']['blogs']['data'];

	let isButtonVisible = list.length > 8;

	function addShowClass() {
		const sharedElements = document.querySelectorAll('.blog-block');
		sharedElements.forEach((element) => {
			element.classList.add('show-blog-block');
		});

		isButtonVisible = false;
	}
</script>

<div class="blogs-blocks-wrapper grid sm:grid-cols-3 lg:grid-cols-4 gap-[30px] lg:gap-[50px]">
	{#each list as { attributes: { blog_author, blog_categories, cover_image, date_published, slug, title } }}
		<a href={`/blog/${slug}`} class="blog-block">
			<div class="blog-block-img-wrapper relative">
				<img src={CMS_URL + cover_image.data?.attributes.url} alt={title} class="bg-img" />
			</div>
			<div class="blog-block-texts py-[20px] px-[12px]">
				<div class="blog-tags flex flex-wrap gap-[10px] text-[14px]">
					{#each blog_categories.data as { attributes: { name } }}
						<span>{name}</span>
					{/each}
				</div>
				<h3
					class="blog-block-title text-[24px] leading-8 mb-[20px] mt-[15px] text-greyish-blue"
				>
					{title}
				</h3>
				<div class="text-[12px] text-bright-blue">
					By {blog_author.data.attributes.name} ∙ {format(
						new Date(date_published),
						'MMMM dd, yyyy'
					)} ∙ 3 mins
				</div>
			</div>
		</a>
	{/each}
</div>

{#if isButtonVisible}
	<button
		on:click={addShowClass}
		class="show-blog-trigger-wrapper flex gap-2 justify-center items-center text-bright-blue cursor-pointer text-[16px] my-10"
	>
		<span>View more </span>
		<img src="/images/bright-blue-caret.svg" alt="bright-blue-caret" />
	</button>
{/if}

<style>
	.blog-block-img-wrapper img {
		transition: transform 1.2s;
	}
	.blog-block:hover .blog-block-img-wrapper img {
		transform: scale(1.05);
	}
	.blog-block-img-wrapper {
		width: 100%;
		padding-top: 65%;
	}

	.show-blog-trigger-wrapper {
		padding-bottom: 10px;
		border-bottom: 1px solid;
	}

	@media (max-width: 640px) {
		.blog-block-img-wrapper {
			padding-top: 0;
		}
		.blog-block-img-wrapper img.bg-img {
			position: relative;
		}
	}
</style>
