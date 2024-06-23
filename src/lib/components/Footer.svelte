<!-- Footer -->
<footer>
	<div class="container">
		<!-- City Council Logo -->
		<div class="footer-item council-logo">
			<img
				src="/images/cork-city-council-logo.webp"
				alt="Cork city council logo"
				width="160"
				height="160"
			/>
			<p>Proud initiative of the Cork City Council</p>
		</div>
		<!-- Quicklinks -->
		<div class="footer-item quicklinks">
			<h4>Quicklinks</h4>
			<ul>
				<li>
					<a
						href="https://www.corkcity.ie/"
						target="_blank"
						aria-label="Go to the Cork city council website (Opens in new tab)"
						>Cork City Council website</a
					>
				</li>
				<li>
					<a
						href="https://www.nationaltransport.ie/planning-and-investment/strategic-planning/regional-metropolitan-area-transport-strategies/images/cork-metropolitan-area-transport-strategy/"
						target="_blank"
						aria-label="See the Cork Metropolitan Area Transport Strategy (Opens in new tab)"
						>Cork metropolitan area transport strategy</a
					>
				</li>
				<li>
					<a href="contact">Contact page</a>
				</li>
			</ul>
		</div>
		<!-- Footer social links -->
		<div class="footer-item social-links">
			<h4>Follow us</h4>
			<ul>
				<li>
					<a
						href="https://twitter.com/images/corkcitycouncil"
						target="_blank"
						aria-label="Go to the Cork City Council Twitter page (opens in a new tab)"
						><i class="fa-brands fa-twitter"></i></a
					>
				</li>
				<li>
					<a
						href="https://www.facebook.com/images/corkcitycouncilofficial/"
						target="_blank"
						aria-label="Go to the Cork City Council Facebook page (opens in a new tab)"
						><i class="fa-brands fa-facebook"></i></a
					>
				</li>
				<li>
					<a
						href="https://www.youtube.com/channel/UCmRtn3cK-AoHRR09K5Us41A"
						target="_blank"
						aria-label="Go to the Cork City Council YouTube channel (opens in a new tab)"
						><i class="fa-brands fa-youtube"></i></a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	/* Footer */
	footer {
		font-size: 0.75rem;
		padding-top: 3em;
	}

	footer h4 {
		font-size: 0.9rem;
	}

	footer ul {
		padding-left: 0;
		color: #274e13;
	}

	footer p,
	footer a {
		color: #274e13;
	}

	.footer-item {
		width: 45%;
	}

	.quicklinks li {
		margin-top: 0.75em;
	}

	.social-links {
		margin-top: 1em;
	}

	.social-links ul {
		display: flex;
		font-size: 1.25rem;
		margin-top: 0.25em;
		justify-content: space-between;
		width: 65%;
	}

	.council-logo {
		float: right;
		text-align: center;
		clear: left;
	}

	.council-logo img {
		max-width: 100%;
		height: auto;
	}

	@media screen and (min-width: 479px) {
		/* Footer */
		footer {
			font-size: 0.85rem;
		}

		footer > .container {
			display: flex;
			justify-content: space-between;
		}

		.footer-item {
			width: 30%;
		}

		.social-links {
			margin-top: 0;
		}

		.social-links ul {
			font-size: 1.5rem;
			max-width: 7.25rem;
		}

		footer h4 {
			font-size: 1rem;
		}

		.council-logo {
			float: none;
			clear: none;
		}
	}
</style>
