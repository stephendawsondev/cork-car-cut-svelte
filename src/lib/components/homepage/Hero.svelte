<!-- Homepage hero -->
<section id="homepage-hero" class="hero">
	<div class="hero__image"></div>
	<div class="hero__text-container">
		<h1>Cork Car Cut</h1>
		<h2>An initiative to reduce car usage in Cork City</h2>
		<a href="#how-to-participate" class="btn cta" aria-label="Scrolls to How to participate section"
			>Get involved</a
		>
	</div>
</section>

<style>
	/* Hero section */
	.hero {
		height: 300px;
		position: relative;
	}

	.hero__image {
		background: url('/images/cork-car-cut-banner-small.webp') no-repeat left center;
		background-size: cover;
		height: 100%;
	}

	.hero__text-container {
		position: absolute;
		color: #fff;
		background-color: #274e13;
		padding: 1em;
		width: 70%;
		left: 50%;
		transform: translateX(-50%);
		bottom: -50px;
		border-radius: 0.25rem;
	}

	.hero__text-container > h2 {
		margin-top: 0.25em;
		font-weight: normal;
	}

	@media screen and (min-width: 479px) {
		/* Hero */
		.hero__image {
			background: url('../images/cork-car-cut-banner-medium.webp') no-repeat left center;
		}
	}

	@media screen and (min-width: 749px) {
		/* Hero section */
		.hero__image {
			background: url('../images/cork-car-cut-banner-large.webp') no-repeat left center;
		}

		.hero__text-container {
			opacity: 90%;
			width: 40%;
			transform: initial;
			left: 10%;
			bottom: 13%;
		}
	}

	@media screen and (min-width: 900px) {
		/* Hero section */
		.hero {
			height: 35vh;
		}

		.hero__image {
			background: url('../images/cork-car-cut-banner-extra-large.webp') no-repeat left center;
			background-size: cover;
		}

		.hero__text-container {
			width: 35%;
			max-width: 25rem;
			left: 15%;
			bottom: 13%;
		}
	}

	@media screen and (min-width: 1400px) {
		/* Hero section */
		.hero {
			height: 50vh;
		}

		.hero__text-container {
			left: 25%;
		}
	}
</style>
