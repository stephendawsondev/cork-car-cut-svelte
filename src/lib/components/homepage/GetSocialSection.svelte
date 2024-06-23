<!-- Get social aside -->
<aside>
	<div class="container" id="get-social-container">
		<div class="get-social__text">
			<h3>Get social!</h3>
			<p>
				Use the <span class="get-social__hashtag">#CorkCarCut</span> hashtag to spread the word your
				favourite social platform!
			</p>
		</div>
		<picture>
			<source media="(min-width:749px)" srcset="/images/social-media-icons.webp" />
			<img
				src="/images/social-media-icons-small.webp"
				alt="different social media icons"
				class="get-social__image"
				width="120"
				height="120"
			/>
		</picture>
	</div>
</aside>

<style>
	/* Get social aside */

	aside {
		border-top: 0.25rem double #000;
		border-bottom: 0.25rem double #000;
		margin-top: 3rem;
		padding: 0.75em 0;
	}

	#get-social-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	aside h3 {
		font-size: 1.5rem;
		font-weight: 900;
	}

	aside p span {
		color: #037f0f;
		font-weight: 700;
	}

	.get-social__image {
		width: 7.5rem;
		border-radius: 30%;
		margin-left: 1.25em;
	}

	@media screen and (min-width: 479px) {
		/* Get social aside */
		aside h3 {
			font-size: 1.75rem;
		}

		#get-social-container {
			justify-content: center;
		}

		.get-social__text {
			max-width: 50%;
		}
	}

	@media screen and (min-width: 749px) {
		/* Get social aside */
		.get-social__text {
			max-width: 50%;
			padding: 1.5em 0;
		}
	}

	@media screen and (min-width: 900px) {
		/* Get social aside */
		.get-social__text {
			max-width: 60%;
		}
	}
</style>
