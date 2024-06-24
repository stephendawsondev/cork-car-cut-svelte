<script>
	import Tip from './Tip.svelte';
	let { activity } = $props();
	let { tips, id } = $derived(activity);
</script>

<!-- Pages tips section -->
<section class="tips-section">
	<ol class="tips-list">
		{#each tips as tip, index}
			<li class="tip">
				<Tip {tip} {id} {index} />
			</li>
		{/each}
	</ol>
</section>

<style>
	.tip + .tip {
		margin-top: 2em;
	}

	.tips-list {
		list-style: none;
		padding-left: 0;
	}
</style>
