<script lang="ts">
	import { page } from '$app/stores';
	import type { Country } from '$lib/types/common-types';
	import type { Departments } from '../types';
	import type { CareerJob } from './types';

	export let jobs: CareerJob[] = [];
	export let departments: Departments['data'];
	export let countries: Country[];

	let selectedCountry = countries[0].attributes.name;

	$: filteredJobs =
		$page.params.department === 'all'
			? jobs
			: jobs.filter(
					(job) =>
						job.attributes.department.data.attributes.slug === $page.params.department
			  );
</script>

<div class="select-locations-wrapper mb-[50px]">
	<div class="mb-[12px] text-[16px]">Select location</div>
	<div>
		<select
			bind:value={selectedCountry}
			name="select_location"
			id="select_location"
			class="dark:bg-black"
		>
			{#each countries as { attributes: { name } }}
				<option value={name}>{name}</option>
			{/each}
		</select>
	</div>
</div>

<div class="grid sm:grid-cols-2 gap-[60px] sm:gap-[30px] lg:gap-[60px]">
	<div class="departments-side">
		<div class="category-title text-[10px] mb-[20px]">DEPARTMENTS</div>

		<ul class="department-categories grid gap-[20px] text-[15px]">
			<li class:active={$page.params.department === 'all'}>
				<a href="/careers/all">All Departments ({jobs.length})</a>
			</li>
			{#each departments as { attributes: { title, jobs, slug } }}
				<li class:active={$page.params.department === slug}>
					<a href={`/careers/${slug}`}>{title} ({jobs.data.length})</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="roles-side">
		<div class="category-title text-[10px] mb-[20px]">FEATURED ROLES</div>

		<ul class="department-roles grid gap-[20px]">
			{#if filteredJobs.length < 1}<p class="">No available role</p>{/if}
			{#each filteredJobs as { attributes: { countries, title, uuid, department } }}
				<li>
					<a
						href={`/careers/${department.data.attributes.slug}/${uuid}`}
						class="flex justify-between items-center"
					>
						<div class="role-details">
							<div class="role-title text-greyish-blue">{title}</div>
							<div class="role-location text-[15px]">
								{countries.data.flatMap((c) => c.attributes.name).join(', ')}
							</div>
						</div>
						<img src="/images/right-caret.svg" alt="right-caret" class="right-caret" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.departments-side {
		border-right: 1px solid #dddddd;
		padding-right: 30px;
	}
	.department-categories .active {
		color: var(--color-greyish-blue);
	}
	.department-categories li a:hover {
		cursor: pointer;
		font-weight: bold;
	}
	.role-title {
		font-size: 24px;
	}
	select#select_location {
		border: 1px solid var(--secondary-color-deep-blue, #0d2c65);
		height: 40px;
		width: 215px;
		padding: 0 5px;
		cursor: pointer;
	}

	@media (max-width: 640px) {
		.departments-side {
			border-right: none;
			padding-right: 0;
		}
	}
</style>
