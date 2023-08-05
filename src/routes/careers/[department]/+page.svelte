<script lang="ts">
	import JoiningCwgQuestions from '../JoiningCwgQuestions.svelte';
	import type { PageData } from './$types';
	import CareersTestimoniesSlider from './CareersTestimoniesSlider.svelte';
	import JobCategories from './JobCategories.svelte';

	export let data: PageData;

	$: content = data.pageData;
</script>

<main>
	<header class="section-container py-10">
		<div class="text-center max-w-[876px] m-auto">
			<h1 class="header-txt text-[40px] sm:text-[64px] sm:leading-[77px]">
				{content.header.title}
			</h1>
			<p class="sm:text-[18px] mt-[10px]">{content.header.description}</p>
		</div>
	</header>

	<section class="bg-midnight-blue sm:p-10 my-5">
		<div class="section-container relative testimonies-slider-wrapper py-10">
			<CareersTestimoniesSlider testimonials={content.career_testimonials.data} />
		</div>
	</section>

	<section class="section-container job-categories-wrapper pt-12 pb-20">
		<div class="lg:w-[80%] m-auto">
			<JobCategories
				countries={data.countries}
				departments={data.careersPage.departments.data}
				jobs={data.jobs}
			/>
		</div>
	</section>

	<JoiningCwgQuestions />
</main>
