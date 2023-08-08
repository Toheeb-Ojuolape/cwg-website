<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { Leader } from '../leadership-types';

	export let leader: Leader;
</script>

<header
	class="box-container mx-auto bg-deep-blue bg-dotted-map lg:h-[380px] lg:px-50 flex flex-col lg:flex-row gap-6 lg:gap-9"
>
	<div>
		<img
			src={CMS_URL + leader.attributes.image.data.attributes.url}
			alt={leader.attributes.name}
			class="h-full w-full lg:w-[317px] object-cover"
		/>
	</div>
	<div class="text-white pb-9 px-4 lg:px-0 flex flex-col justify-end h-full">
		<p class="text-xs leading-6 font-light uppercase">
			{leader.attributes.leadership_types.data[0].attributes.title}
		</p>
		<h1 class="text-headline-2 lg:text-headline-1 -ml-1">{leader.attributes.name}</h1>
		<p class="text-body-m font-light lg:text-body-l">{leader.attributes.position}</p>
		<div class="flex items-center gap-1 mt-2">
			{#each leader.attributes.social_media_handles as { icon, link, name }}
				<a href={link} target="_blank">
					<img src={CMS_URL + icon.data?.attributes.url} alt={name} />
				</a>
			{/each}
		</div>
	</div>
</header>
