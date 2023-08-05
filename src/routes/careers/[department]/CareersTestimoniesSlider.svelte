<script lang="ts">
	import '../careers-style.css';
	import { ArrowLeftCircle, ArrowRightCircle, Icon } from 'svelte-hero-icons';
	import type { Testimonial } from './types';
	import { CMS_URL } from '$lib/api';

	let currentSlide = 0;

	export let testimonials: Testimonial[];

	function goToSlide(index: number) {
		currentSlide = index;
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % testimonials.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
	}
</script>

<div class="slider">
	{#each testimonials as { attributes: { comment, image, location, name, position } }, index}
		<div
			class="flex flex-col lg:flex-row gap-[20px] text-white slide {index === currentSlide
				? 'active'
				: ''}"
		>
			<div class="testimony-details-side w-[340px] text-[14px]">
				<div class="testifier-img-wrapper mb-[12px]">
					<img
						src={CMS_URL + image.data?.attributes.url}
						alt={name}
						class="testifier-img"
					/>
				</div>
				<div class="testifier-name text-[24px] text-pewter-blue">{name}</div>
				<div class="testifier-role">{position}</div>
				<div class="testifier-location">{location}</div>
			</div>
			<div class="testimony-txt-side flex-1 relative">
				<img src="/images/quote.svg" alt="quote" class="quote-icon" />
				<div class="testimony-txt pl-[20px] lg:pl-[120px] pt-[10px] sm:text-[18px]">
					<p class="py-3">{@html comment}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="indicators">
	{#each testimonials as _, index}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			class="indicator {index === currentSlide ? 'active' : ''}"
			on:click={() => goToSlide(index)}
		/>
	{/each}
</div>

<button on:click={prevSlide} disabled={currentSlide === 0} class="slider-btn prev-btn">
	<Icon src={ArrowLeftCircle} solid={true} class="h-10 w-[44px] fill-pewter-blue" />
</button>
<button
	on:click={nextSlide}
	disabled={currentSlide === testimonials.length - 1}
	class="slider-btn next-btn"
>
	<Icon src={ArrowRightCircle} solid={true} class="h-10 w-[44px] fill-pewter-blue" />
</button>

<style>
	.slider {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 85%;
		margin: 0 auto;
		overflow: hidden;
	}

	.slide {
		position: absolute;
		right: -200%;
		transition: right 1s linear;
	}

	.slide.active {
		position: relative;
		right: 0;
	}

	button.slider-btn {
		border-radius: 50%;
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	button.slider-btn::before {
		position: absolute;
		content: '';
		background-color: white;
		top: 12px;
		left: 12px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}

	button.slider-btn.prev-btn {
		left: 0;
	}
	button.slider-btn.next-btn {
		right: 0;
	}

	.indicators {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		margin-top: 20px;
	}

	.indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #fff;
		margin: 0 3px;
		cursor: pointer;
	}

	.indicator.active {
		background-color: var(--color-pewter-blue);
		width: 20px;
		border-radius: 6px;
	}

	@media (max-width: 1024px) {
		.testimony-details-side {
			margin: auto;
		}
		.slide {
			opacity: 0;
		}

		.slide.active {
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.testimony-details-side {
			text-align: center;
		}
	}
</style>
