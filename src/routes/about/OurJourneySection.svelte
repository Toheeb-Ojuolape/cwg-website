<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { AboutPage } from '$lib/types/about-page';

	export let table: AboutPage['journey_section_table'];
	export let title: AboutPage['journey_section_title'];
</script>

<section class="section-container bg-whitish-blue dark:bg-white/10 pt-8 lg:pt-11 pb-10 lg:pb-20">
	<h2 class="text-headline-4 lg:text-headline-2 text-center mb-8 lg:mb-14">{title}</h2>

	<div class="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-30">
		{#each table as { table_row }}
			<div class="Table">
				<div class="Table__header">
					<div>Journey Date</div>
					<div>Achievements</div>
					<div />
				</div>
				<div>
					{#each table_row as item}
						<div class="Table__body border-b border-b-[#7DA7BB]/30">
							<div class="bg-black-300 dark:bg-black/20">
								<p class="text-base lg:text-[20px]">{item.journey_date}</p>
							</div>
							<div class="bg-black-400 dark:bg-black/40">
								<p class="text-base lg:text-[20px]">{item.achievement_title}</p>
								<p class="text-body-xs lg:text-body-s font-light">
									{item.achievement_subtitle}
								</p>
							</div>
							<div class="bg-black-300 dark:bg-black/20">
								<img
									alt={item.achievement_title}
									src={CMS_URL + item.image.data.attributes.url}
									class="w-11"
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.Table {
		max-width: 530px;
		width: 100%;
	}

	.Table__header {
		background-color: var(--color-midnight-blue);
		display: flex;
		color: white;
	}

	.Table__header > div {
		padding-top: 24px;
		padding-bottom: 24px;
		padding-left: 20px;
	}

	.Table__header > div:nth-child(1),
	.Table__body > div:nth-child(1) {
		width: 144px;
	}

	.Table__header > div:nth-child(2) {
		flex: 1;
		background-color: rgba(243, 243, 243, 0.03);
	}

	.Table__header > div:nth-child(3),
	.Table__body > div:nth-child(3) {
		width: 85px;
	}

	.Table__body {
		display: flex;
	}

	.Table__body > div {
		padding-top: 20px;
		padding-left: 20px;
		padding-bottom: 12px;
	}

	.Table__body > div:nth-child(2) {
		flex: 1;
	}
</style>
