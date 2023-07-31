<script lang="ts">
	import Group from '$lib/images/Group.png';
</script>

<section class="section-container pt-8 lg:pt-11 pb-10 lg:pb-20">
	<h2 class="text-headline-4 lg:text-headline-2 text-center mb-8 lg:mb-14">
        CWG's Unstoppable Journey: A Continuous Evolution of Excellence
    </h2>

	<div class="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-30">
		<div class="Table">
			<div class="Table__header">
				<div>Journey Date</div>
				<div>Achievements</div>
				<div />
			</div>
			<div>
				{#each [1, 2, 3, 4, 5, 6, 7] as _}
					<div class="Table__body border-b border-b-[#7DA7BB]/30">
						<div class="bg-black-300 dark:bg-black/20">
							<p class="text-base lg:text-[20px]">1992</p>
						</div>
						<div class="bg-black-400 dark:bg-black/40">
							<p class="text-base lg:text-[20px]">Network and Communication</p>
							<p class="text-body-xs lg:text-body-s font-light">DCC</p>
						</div>
						<div class="bg-black-300 dark:bg-black/20">
							<img alt="group" src={Group} class="w-11" />
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="Table">
			<div class="Table__header">
				<div>Journey Date</div>
				<div>Achievements</div>
				<div />
			</div>
			<div>
				{#each [1, 2, 3, 4, 5, 6, 7] as _}
					<div class="Table__body border-b border-b-[#7DA7BB]/30">
						<div class="bg-black-300 dark:bg-black/20">
							<p class="text-base lg:text-[20px]">1992</p>
						</div>
						<div class="bg-black-400 dark:bg-black/40">
							<p class="text-base lg:text-[20px]">Network and Communication</p>
							<p class="text-body-xs lg:text-body-s font-light">DCC</p>
						</div>
						<div class="bg-black-300 dark:bg-black/20">
							<img alt="group" src={Group} class="w-11" />
						</div>
					</div>
				{/each}
			</div>
		</div>
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

    @media(max-width: 1023px) {
        .Table {
            max-width: none;
        }
    }
</style>
