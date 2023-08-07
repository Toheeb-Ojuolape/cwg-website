<script lang="ts">
	import { format } from 'date-fns';
	import type { CWGAt30PageData } from './types';
	import { CMS_URL } from '$lib/api';

	export let list: CWGAt30PageData['cwg_30_events']['data'];
</script>

{#each list as { attributes: { date, link_one, link_two, title } }}
	<div class="event-block relative px-[50px] pt-[10px] pb-[30px]">
		{#if date}
			<div class="event-date text-[12px] mb-[15px]">
				{format(new Date(date), 'MMMM dd, yyyy')}
			</div>
		{/if}
		<div class="event-title text-[24px] leading-[31px] pb-[45px]">
			{title}
		</div>

		<div class="event-link-wrapper flex justify-between text-[16px]">
			<a href={`/${link_one.slug}`} class="text-bright-blue flex gap-[5px] items-center">
				<img src={CMS_URL + link_one.thumbnail.data?.attributes.url} alt="icon" />
				<span>{link_one.title}</span>
			</a>
			<a
				href={`/${link_two.slug}`}
				download=""
				class="text-bright-blue flex gap-[5px] items-center"
			>
				<img src={`${CMS_URL}${link_two.thumbnail.data?.attributes.url}`} alt="icon" />
				<span>{link_two.title}</span>
			</a>
		</div>
	</div>
{/each}

<style>
	.event-block {
		border-right: 1px solid #ddd;
	}
	.event-block:last-child {
		border: none;
	}
	.event-link-wrapper {
		position: absolute;
		bottom: 0;
		left: 50px;
		width: calc(100% - 100px);
	}
	.event-link-wrapper a {
		border-bottom: 1px solid currentColor;
		padding-bottom: 10px;
	}

	@media (min-width: 1024px) {
		.event-block:nth-child(3n) {
			border: none;
		}
		.event-block:nth-child(3n + 1) {
			padding-left: 0;
		}
		.event-block:nth-child(3n + 3) {
			padding-right: 0;
		}
		.event-block:nth-child(3n + 1) .event-link-wrapper {
			left: 0;
			width: calc(100% - 50px);
		}
		.event-block:nth-child(n + 4) .event-date {
			padding-top: 50px;
		}
	}

	@media (min-width: 640px) and (max-width: 1023px) {
		.event-block:nth-child(2n) {
			border: none;
		}
		.event-block:nth-child(2n + 1) {
			padding-left: 0;
		}
		.event-block:nth-child(2n + 2) {
			padding-right: 0;
		}
		.event-block:nth-child(2n + 1) .event-link-wrapper {
			left: 0;
			width: calc(100% - 50px);
		}
		.event-block:nth-child(n + 3) .event-date {
			padding-top: 50px;
		}
	}

	@media (max-width: 639px) {
		.event-block {
			border: none;
			padding-left: 0;
		}
		.event-block .event-link-wrapper {
			left: 0;
			width: 100%;
		}
		.event-block:not(:first-child) .event-date {
			padding-top: 50px;
		}
	}
</style>
