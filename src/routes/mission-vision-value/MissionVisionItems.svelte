<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { MissionPage } from '$lib/types/mission-page';
	import { attr } from 'svelte/internal';

	const list = [
		{
			title: 'Powering Impactful Solutions across Africa',
			subtitle:
				'CWG plays a prominent role in the creation of products and services that address real challenges, and solve everyday problems in African businesses, contributing to the growth and development of the African continent.'
		},
		{
			title: 'Positioning Africa to Maximise the Future',
			subtitle:
				'CWG identifies problems across sub-saharan Africa, and serves as a bridge that uses technology to close these gaps - thereby, leading development in Africa, and bridging the gap between today and the future. CWG is championing “New Africa”.'
		},
		{
			title: 'Enabling Future Shapers',
			subtitle:
				'CWG is a leading foundation for people in government, SME’s, Grassroot level, that will shape the future of Africa. CWG uses technology as the catalyst to help these people to grow and thrive in their various industries. Ultimately positioning Africa to maximize the future.'
		},
		{
			title: 'Supporting tipping point innovation',
			subtitle:
				'When it comes to innovation that transforms people and industries, CWG is at the heart of these innovations either as a stakeholder, or a facilitator. CWG is building structures and partnerships that support tipping point innovation.'
		}
	];

	export let data: MissionPage['visions_section'];
</script>

<section
	class="section-container mx-auto border-t border-t-black-600 dark:border-t-black-900 pt-10 mb-14"
>
	<div class="flex flex-col gap-5 lg:flex-row">
		{#each data as { title, image, content }}
			<div class="text-white flex-1">
				<div class="h-[184px] relative">
					<img src={CMS_URL + image.data?.attributes.url} alt={title} class="fill-img" />
				</div>
				<div class="bg-midnight-blue px-8 pt-3 h-[74px]">
					<p class="text-body-m lg:text-body-l lg:font-normal">{title}</p>
				</div>
				<div class="bg-pewter-blue pt-4 pl-7 pr-4 h-[207px]">
					<p class="text-body-s lg:text-body-m">
						{@html content}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	img.fill-img {
		width: 100%;
		height: 100%;
		position: relative;
		object-fit: cover;
	}
</style>
