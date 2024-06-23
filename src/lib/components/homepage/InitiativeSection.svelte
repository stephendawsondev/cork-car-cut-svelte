<!-- Initiative objective section -->
<section id="initiative-objective">
	<div class="container">
		<h3>What we want to change</h3>
		<div class="initiative-object__content">
			<picture>
				<source
					media="(min-width:749px)"
					srcset="/images/traffic-in-cork-city.webp"
					width="346"
					height="414"
				/>
				<img
					src="/images/traffic-in-cork-city-small.webp"
					alt="Vehicles driving on Cork city road"
					width="170"
					height="204"
				/>
			</picture>
			<div class="initiative-objective__text">
				<p>
					Cork City is currently facing a significant issue - there are too many cars on the road.
					This is causing a range of problems, such as traffic congestion, increased pollution, and
					safety concerns. The heavy traffic flow results in long queues, causing delays and
					frustrations for commuters, impacting productivity. Moreover, the rise in air pollution
					levels poses serious health threats, particularly to the elderly and people with
					respiratory conditions.
				</p>
				<p>
					The high number of cars on the road also jeopardises the safety of pedestrians, cyclists,
					and drivers. To tackle these issues, we need to consider sustainable solutions, such as
					promoting public transport, creating cycle lanes, and encouraging carpooling. By doing so,
					we can make Cork City a safer and more liveable place for everyone.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* Initiative Objective Section */
	#initiative-objective img {
		display: block;
		margin: 1em auto;
		border: 5px solid #274e13;
		/* Border radius from Fancy Border Radius: https://mdbootstrap.com/docs/standard/tools/design/fancy-border-radius/ */
		border-radius: 20% 80% 40% 60% / 89% 23% 77% 11%;
		max-width: 100%;
		height: auto;
	}

	@media screen and (min-width: 479px) {
		/* Initiative Objective Section */
		#initiative-objective img {
			float: right;
			margin-left: 2em;
			width: 30%;
		}
	}

	@media screen and (min-width: 900px) {
		/* Initiative Objective */
		.initiative-object__content {
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-end;
		}

		#initiative-objective img {
			float: none;
			width: initial;
			border: 10px solid #274e13;
		}

		.initiative-objective__text {
			width: 60%;
		}
	}
</style>
