<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import { format } from 'date-fns';
	import type { ActionData, PageData } from './$types';
	import DividendsBlocks from './DividendsBlocks.svelte';
	import PressRelease from './PressRelease.svelte';
	import UpcomingEventBlock from './UpcomingEventBlock.svelte';
	import YearlyDocumentsWrapper from './YearlyDocumentsWrapper.svelte';
	import './investor-relations-styles.css';
	import { enhance } from '$app/forms';

	let pressReleases = false;
	let events = false;
	let presentations = false;
	let generalAnnouncements = false;

	export let data: PageData;
	export let form: ActionData;

	$: content = data.pageData;

	$: alerts = {
		pressReleases: pressReleases ?? undefined,
		events: events ?? undefined,
		presentations: presentations ?? undefined,
		generalAnnouncements: generalAnnouncements ?? undefined
	};
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url(${
			CMS_URL + content.header.background_image.data?.attributes.url
		})`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{content.header.title}
				</h1>

				<p class="mb-9 header-title-desc">{content.header.description}</p>
			</div>
		</div>
	</header>

	<section class="section-container">
		<div class="text-center mb-13 mt-15 m-auto max-w-[1170px] section-header">
			<h2 class="text-headline-2 mb-3 max-w-[775px] mx-auto">
				{content.section_one.title}
			</h2>
			<p class="text-body-l font-normal">{@html content.section_one.content}</p>
		</div>
	</section>

	<section class="bg-midnight-blue relative text-white my-10">
		<div class="half-bg">
			<img
				src={CMS_URL + content.shares_highlight.image.data?.attributes.url}
				alt={content.shares_highlight.image.data?.attributes.alternativeText}
				class="bg-img"
			/>
		</div>
		<div class="section-container grid lg:grid-cols-2">
			<div />
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-[50px] sm:gap-[0] pl-10 pr-5 py-12">
				<div class="flex flex-col justify-between dotted-right-border">
					<div class="text-[18px]">{content.shares_highlight.share_name}</div>
					<div class="text-[70px] my-[40px]">
						{content.shares_highlight.share_currency}{content.shares_highlight
							.share_unit_price}
					</div>
					<div class="text-[18px]">
						{content.shares_highlight.share_price_title} • {format(
							new Date(content.shares_highlight.share_price_date),
							'dd/MM/yyyy'
						)}
					</div>
				</div>
				<div class="flex flex-col justify-between sm:pl-[50px]">
					<div class="text-[18px] pb-[10px]">{content.shares_highlight.fy_title}</div>
					<div class="grid grid-cols-2 gap-[45px]">
						<div>
							<div class="text-[28px]">{content.shares_highlight.revenue}</div>
							<div class="text-[12px] text-burlywood">Revenue</div>
						</div>
						<div>
							<div class="text-[28px]">
								{content.shares_highlight.profit_before_tax}
							</div>
							<div class="text-[12px] text-burlywood">Profit Before Tax</div>
						</div>
						<div>
							<div class="text-[28px]">{content.shares_highlight.gross_profit}</div>
							<div class="text-[12px] text-burlywood">Gross Profit</div>
						</div>
						<div>
							<div class="text-[28px]">
								{content.shares_highlight.profit_after_tax}
							</div>
							<div class="text-[12px] text-burlywood">Profit After Tax</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="dividend-block section-container grid sm:grid-cols-3 lg:grid-cols-4 my-20">
		<DividendsBlocks data={content.annual_result_breakdowns.data} />
	</section>

	<span id="annual-reports" class="dummy-id" />
	<section class="yearly-block">
		<YearlyDocumentsWrapper data={content.company_years.data} />
	</section>

	<hr class="gray-line" />

	{#if content.press_release['data'].length > 0}
		<section class="press-release py-10 section-container">
			<div class="flex flex-col sm:flex-row justify-between">
				<h2 class="text-headline-2">Press Releases</h2>
				<a
					href={`/${content.all_press_releases_link?.slug}`}
					class="text-bright-blue flex items-center gap-[20px] text-[16px]"
				>
					<span>{content.all_press_releases_link?.title}</span>
					<img src="/images/blue-arrow-right.svg" alt="blue-arrow-right" />
				</a>
			</div>

			<div class="py-10">
				<PressRelease list={content.press_release['data']} />
			</div>
		</section>
	{/if}

	<hr class="gray-line" />

	<section class="upcoming-events-setion section-container py-10">
		<div class="section-header">
			<h2 class="text-headline-2">{content.upcoming_event_title}</h2>
		</div>

		<div class="upcoming-event-wrapper my-15">
			<UpcomingEventBlock upcomingEvent={content.upcoming_event.data[0].attributes} />
		</div>

		{#if content.all_events_link}
			<a
				href={`/${content.all_events_link.slug}`}
				class="flex items-center gap-2 mt-5 text-[18px]"
			>
				<span>{content.all_events_link.title}</span>
				<div class="arrow-right">
					<ArrowRightLong strokeClassName="stroke-blue" />
				</div>
			</a>
		{/if}
	</section>

	<hr class="gray-line" />

	<section class="section-container pt-10 pb-20">
		<div class="grid sm:grid-cols-2 gap-[20px]">
			<div class="form-sub-side">
				<div class="section-header">
					<h2 class="text-headline-2">Email Alerts and Contact Info</h2>
				</div>

				<form method="POST" id="contact-subscription-form" use:enhance>
					<div class="form-group my-[25px]">
						<input
							type="email"
							placeholder="Email address"
							class="inp-field"
							id="email"
							name="email"
							required
						/>
						{#if form?.error}
							<span class="text-error mt-1 block text-body-s">{form.error}</span>
						{/if}

						{#if form?.success}
							<span class="text-light-green mt-1 block text-body-s"
								>Successfully signed up</span
							>
						{/if}
					</div>

					<div class="form-group checkbox-group grid gap-[10px] max-w-[210px]">
						<label class="cursor-pointer flex gap-[20px]">
							<input type="checkbox" bind:checked={pressReleases} />
							<span>Press Releases</span>
						</label>
						<label class="cursor-pointer flex gap-[20px]">
							<input type="checkbox" bind:checked={events} />
							<span>Events</span>
						</label>
						<label class="cursor-pointer flex gap-[20px]">
							<input type="checkbox" bind:checked={presentations} />
							<span>Presentations</span>
						</label>
						<label class="cursor-pointer flex gap-[20px]">
							<input type="checkbox" bind:checked={generalAnnouncements} />
							<span>General Announcements</span>
						</label>
					</div>
					<input class="hidden" name="alerts" value={JSON.stringify(alerts)} />

					<button
						type="submit"
						class="submit-btn text-bright-blue mt-[30px] px-[24px] py-[10px] text-[14px]"
					>
						Submit
					</button>
				</form>
			</div>

			<div class="contact-details-side">
				<div class="max-w-[444px]">
					<div class="mb-[30px] text-[18px]">
						{@html content.contact_us_info}
					</div>

					<a href="/contact-us" class="flex items-center gap-2 mt-5 text-[18px]">
						<span>Contact us</span>
						<div class="arrow-right">
							<ArrowRightLong strokeClassName="stroke-blue" />
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	header.header {
		background-size: inherit;
		background-position: center 20%;
	}

	input.inp-field {
		width: 300px;
		padding: 10px 16px;
		border: 1px solid var(--color-midnight-blue);
	}
	input[type='checkbox'] {
		width: 27px;
		height: 27px;
	}
	button.submit-btn {
		border: 1px solid var(--color-bright-blue);
	}
	button.submit-btn:hover {
		color: white;
		background-color: var(--color-bright-blue);
	}
</style>
