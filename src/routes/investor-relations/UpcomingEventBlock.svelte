<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { UpcomingEvent } from '$lib/types/common-types';
	import { format } from 'date-fns';

	export let upcomingEvent: UpcomingEvent['attributes'];
</script>

<div class="event-block grid sm:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
	<div class="event-img-side relative">
		<img
			src={CMS_URL + upcomingEvent.image.data?.attributes.url}
			alt={upcomingEvent.image.data?.attributes.alternativeText}
			class="event-img bg-img"
		/>
	</div>

	<div class="event-details-side">
		{#if upcomingEvent.datetime}
			<div class="text-[18px]">
				<span class="text-bright-blue"
					>{format(new Date(upcomingEvent.datetime), 'MMMM dd, yyyy')}</span
				>
				∙ {format(new Date(upcomingEvent.datetime), 'hh:mm')} WAT
			</div>
		{/if}
		<h2 class="event-title text-[32px] pt-[15px] pb-[30px]">{upcomingEvent.title}</h2>

		<div class="flex gap-[50px]">
			<a href="/" class="flex gap-[12px] text-[16px] header-link text-bright-blue">
				<img src="/images/plus.svg" alt="plus" />
				<span>Add to calendar</span>
			</a>
			<a
				href={upcomingEvent.video_link}
				class="flex gap-[12px] text-[16px] header-link text-bright-blue"
			>
				<img src="/images/smart-tv.svg" alt="smart-tv" />
				<span>Video link</span>
			</a>
		</div>
	</div>
</div>

<style>
	.event-img-side {
		width: 100%;
		padding-top: 60%;
	}
	a.header-link {
		width: auto;
		border-bottom: 1px solid var(--color-bright-blue);
		padding-bottom: 12px;
	}
	a.header-link,
	a.header-link::before {
		border-color: var(--color-bright-blue);
	}
</style>
