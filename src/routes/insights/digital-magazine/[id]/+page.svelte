<script lang="ts">
	import { format } from 'date-fns';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	$: magazine = data.magazine;
</script>

<main>
	<header
		class="header py-[30px] sm:p-0 sm:h-[300px] lg:h-[477px] flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">
					{magazine.caption} ∙
					<span class="text-bright-blue"
						>{magazine.issue_date
							? format(new Date(magazine.issue_date), 'MMMM, yyyy')
							: ''}</span
					>
				</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{magazine.title}
				</h1>

				<p class="mb-9 header-title-desc">{@html magazine.description}</p>
			</div>
		</div>
	</header>

	<section class="pdf-viewer-section bg-midnight-blue mb-[80px] text-white">
		<div class="sm:w-[90%] md:w-[80%] m-auto">
			<object
				data={CMS_URL + magazine.file.data?.attributes.url}
				title="September Content Calender 2020"
				type="application/pdf"
				width="100%"
				height="600px"
			>
				<p>
					Unable to display PDF file. <a
						href={CMS_URL + magazine.file.data?.attributes.url}>Download</a
					> instead.
				</p>
			</object>
		</div>
	</section>
</main>

<style>
	object p {
		font-size: 30px;
		text-align: center;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		width: 90%;
		margin: auto;
	}
	object p a {
		text-decoration: underline;
		color: var(--color-whitish-blue);
	}
</style>
