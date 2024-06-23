<script>
	let { tip, id, index } = $props();
	let round = $derived(id === 'walk-or-roll' && index === 0 ? '' : 'round');
</script>

<li id="step-{index}" class="tip">
	<div class="container">
		<h3>{tip.tipTitle}</h3>
		<div class="tip-content">
			<div class="img-container {round}">
				<img src={tip.image} alt="" width="201" height="156" />
			</div>
			<div class="tip__text">
				{@html tip.tipText}
			</div>
		</div>
	</div>
</li>

<style>
	.tip-content {
		margin-top: 1.25em;
	}

	.tip-content .img-container {
		box-sizing: border-box;
		background-color: #274e13;
		border-radius: 5px;
		padding: 0.5em;
	}

	.tip-content img {
		display: block;
		margin: 0.5em auto;
		max-width: 100%;
		height: auto;
	}

	.tip-content .img-container.round {
		background-color: transparent;
	}

	.tip h3 {
		font-size: 1.5rem;
	}

	:global(.tip h4) {
		margin-top: 0.75em;
		font-size: 1.25rem;
	}

	:global(.tip__text ul) {
		list-style: disc;
		margin-bottom: 1em;
	}

	@media screen and (min-width: 749px) {
		.tip-content {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.tip-content .img-container {
			max-width: initial;
			width: 25%;
		}

		.tip-content .tip__text {
			width: 75%;
			margin-left: 2em;
		}
	}
</style>
