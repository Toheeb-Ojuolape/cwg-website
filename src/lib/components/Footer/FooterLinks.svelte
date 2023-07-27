<script lang="ts">
	export let title: string;
	export let list: any[];
</script>

<div>
	<h6 class="text-headline-6 text-greyish-blue mb-3 lg:mb-5">{title}</h6>
	<ul class="text-white text-body-s">
		<!-- {#each list as { attributes: { title, slug } }} -->
		{#each list as { title, slug }}
			<li>
				<a href={slug}>{title}</a>
			</li>
		{/each}
	</ul>
</div>
