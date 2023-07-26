<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import { Type, type TExcellence } from './types';
	import { format } from 'date-fns';

	export let topics: TExcellence['conference_topics']['data'];

	const arrowDirection: Record<string, string> = {
		down: '/images/down-arr.svg',
		left: '/images/left-arr.svg',
		right: '/images/right-arr.svg'
	};
</script>

{#each topics as { attributes: { arrow_direction, date, image, title, topic_type } }}
	{#if topic_type === Type.CardNote}
		<div
			class="topics-block relative flex flex-col justify-between bg-midnight-blue text-white p-[30px]"
		>
			<div class="topics-block-top flex flex-col items-end gap-[5px]">
				{#if date}
					<div class="topic-number">{format(new Date(date), 'dd')}</div>
					<div class="topic-date">{format(new Date(date), 'MMMM yyyy')}</div>
				{/if}

				{#if arrow_direction !== null}
					<img src={arrowDirection[arrow_direction]} alt="arrow" class="topic-arrow" />
				{/if}
			</div>
			<div class="topics-title">{title}</div>
		</div>
	{:else}
		<div class="topics-block relative bg-midnight-blue topics-img-wrapper">
			<img
				src={CMS_URL + image.data?.attributes.url}
				alt={image.data?.attributes.alternativeText}
				class="bg-img"
			/>
		</div>
	{/if}
{/each}

<style>
	.topic-number {
		font-size: 96px;
		line-height: 77px;
	}
	.topics-title {
		font-size: 32px;
		line-height: 42px;
		margin-top: 30px;
	}

	.topics-img-wrapper {
		padding-top: 90%;
	}
</style>
