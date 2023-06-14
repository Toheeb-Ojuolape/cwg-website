<script lang="ts">
	export let title: string;
	export let list: { title: string; link: string }[];
</script>

<div>
	<h6 class="text-headline-6 text-greyish-blue mb-5">{title}</h6>
	<ul class="text-white text-body-s">
		{#each list as { title, link }}
			<li>
				<a href={link}>{title}</a>
			</li>
		{/each}
	</ul>
</div>
