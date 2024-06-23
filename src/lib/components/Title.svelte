<script>
	let { title, subtitle } = $props();
</script>

<!-- Page title banner -->
<section class="title-section">
	<div class="container">
		<div class="title-section__text">
			<h1>{title}</h1>
			{#if subtitle}
				<h2>{subtitle}</h2>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Car alternatives pages */
	.title-section {
		background-color: #274e13;
		color: #fff;
		height: 20vh;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.title-section .container {
		width: 100%;
	}
</style>
