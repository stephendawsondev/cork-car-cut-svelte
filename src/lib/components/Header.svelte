<script>
	import { page } from '$app/stores';

	let { activities } = $props();

	let urlPath = $derived($page.url.pathname.split('/')[1]);
</script>

<!-- Site Header -->
<header>
	<div class="container">
		<a href="/" class="logo-link" aria-label="Go to the Cork Car Cut homepage">
			<picture>
				<source
					media="(min-width:479px)"
					srcset="/images/cork-car-cut-logo.webp"
					width="96"
					height="55"
				/>
				<img
					src="/images/cork-car-cut-logo-small.webp"
					alt="Cork Car Cut logo"
					width="64"
					height="37"
				/>
			</picture>
		</a>
		<!-- Site navigation items -->
		<nav aria-label="Site navigation">
			<ul>
				<li class="nav__item">
					<a href="/" class="nav__link active">Home</a>
				</li>
				<!-- CSS only dropdown -->
				<li class="nav__item dropdown">
					<button
						class="nav__link"
						type="button"
						aria-haspopup="true"
						aria-controls="dropdown-list"
					>
						Getting Started <i class="fa-solid fa-chevron-down"></i>
					</button>
					<ul id="dropdown-list" class="dropdown-list" role="menu">
						{#each activities as activity (activity.id)}
							<li class="dropdown__item">
								<a
									href="/{activity.id}"
									class={activity.id == urlPath ? 'dropdown__link active' : 'dropdown__link'}
									>{activity.title}</a
								>
							</li>
						{/each}
					</ul>
				</li>
				<li class="nav__item">
					<a href="contact" class="nav__link">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	/* Header and navigation */
	header {
		width: 100%;
		background-color: #fff;
		position: fixed;
		z-index: 2;
		top: 0;
		height: 4.25rem;
		/* Box shadow from CSS Box Shadow Generator: https://cssgenerator.org/box-shadow-css-generator */
		box-shadow: 0 -4px 8px 5px rgba(0, 0, 0, 0.2);
	}

	header a {
		color: inherit;
	}

	header > .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.logo-link {
		min-width: 3rem;
		width: 4rem;
	}

	.logo-link img {
		max-width: 100%;
		height: auto;
	}

	nav > ul {
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		padding-left: 1.25em;
	}

	.nav__item ~ .nav__item {
		margin-left: 0.75em;
	}

	.nav__item i {
		font-size: 0.5rem;
	}

	.active {
		color: #037f0f;
		border-bottom: 1px solid #037f0f;
	}

	.nav__item.dropdown {
		position: relative;
	}

	.nav__item.dropdown button {
		background-color: inherit;
		font-size: inherit;
		font-family: inherit;
		color: inherit;
		border: none;
		display: inline-block;
		padding: 0;
	}

	.nav__item.dropdown button:hover {
		color: #037f0f;
	}

	.dropdown-list {
		background-color: #fff;
		position: absolute;
		width: 120%;
		right: 0;
		top: 2.25rem;
		padding-left: 0;
	}

	button + .dropdown-list {
		visibility: hidden;
	}

	.nav__item.dropdown:focus-within .dropdown-list {
		visibility: visible;
	}

	.dropdown__item {
		box-sizing: border-box;
		border: 1px solid lightgrey;
	}

	.dropdown__item:hover {
		background-color: #274e13;
	}

	.dropdown__item:hover a {
		color: #fff;
	}

	.dropdown__link {
		box-sizing: border-box;
		display: block;
		width: 100%;
		padding: 0.75em;
	}

	.dropdown__link.active {
		border-bottom: 0;
	}

	@media screen and (min-width: 479px) {
		/* Header */
		.logo-link {
			width: 6rem;
			margin-top: 0.5em;
		}
	}

	@media screen and (min-width: 749px) {
		/* Header and navigation */
		nav {
			width: 45%;
		}

		nav > ul {
			justify-content: space-between;
			font-size: 1rem;
		}
	}
</style>
