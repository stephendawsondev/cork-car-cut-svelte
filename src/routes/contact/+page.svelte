<script>
	import Title from '$lib/components/Title.svelte';

	let title = 'Contact';
</script>

<Title {title} />
<!-- Contact section -->
<section id="form-section">
	<div class="container">
		<h2>Contact form</h2>
		<div class="content-container">
			<div class="img-container">
				<picture>
					<source
						media="(min-width:749px)"
						srcset="/images/cork-city-hall-vertical.webp"
						width="330"
						height="463"
					/>
					<img
						src="/images/cork-city-hall.webp"
						alt="Cork county hall building"
						width="380"
						height="222"
					/>
				</picture>
			</div>
			<form action="https://formdump.codeinstitute.net/" method="POST">
				<p>Fill out the form below and we will reply as soon as possible.</p>
				<div class="double-field">
					<div>
						<label for="first-name">First Name</label>
						<input type="text" id="first-name" name="first-name" placeholder="John" required />
					</div>
					<div>
						<label for="last-name">Last Name</label>
						<input type="text" id="last-name" name="last-name" placeholder="Doe" required />
					</div>
				</div>
				<div>
					<label for="email">Email</label>
					<input type="email" id="email" name="email" placeholder="john@example.com" required />
				</div>
				<div>
					<label for="phone">Phone Number</label>
					<input type="tel" id="phone" name="phone" placeholder="083 123 4567" />
				</div>
				<fieldset>
					<legend>Reason for Contact</legend>
					<div>
						<label>
							<input type="radio" name="reason" value="get-started" required />
							Get started with alternative transport
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="reason" value="complaint" />
							Make a complaint
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="reason" value="feedback" />
							Provide feedback
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="reason" value="volunteer" />
							Volunteer
						</label>
					</div>
					<div>
						<label>
							<input type="radio" name="reason" value="general" />
							General enquiry
						</label>
					</div>
				</fieldset>
				<div>
					<label for="message">Your message</label>
					<textarea
						id="message"
						name="message"
						rows="10"
						placeholder="Here is my message/comment..."
						required
					></textarea>
				</div>
				<button type="submit">Send message</button>
			</form>
		</div>
	</div>
</section>
<!-- Map and address section (use div for accessibility purposes as
the section doesn't have a heading) -->
<div class="map">
	<div class="container">
		<address>
			<p><strong>Cork City Council Address:</strong></p>
			<p>CASP Office,</p>
			<p>Cork City Council,</p>
			<p>City Hall</p>
			<p>Cork,</p>
			<p>Ireland.</p>
		</address>
	</div>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9848.62805369559!2d-8.495752299120635!3d51.894598666982745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900f58d7ece7%3A0x6fa5edc96956ea63!2sCork%20City%20Council!5e0!3m2!1sen!2sie!4v1681049360055!5m2!1sen!2sie"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Cork City Hall location on Google maps"
	></iframe>
</div>

<style>
	/* Contact page */
	#form-section img {
		box-sizing: border-box;
		display: block;
		margin: 1em auto;
		/* Border radius from Fancy Border Radius: https://mdbootstrap.com/docs/standard/tools/design/fancy-border-radius/ */
		border-radius: 18% 82% 71% 29% / 70% 46% 54% 30%;
		border: 5px solid #274e13;
		max-width: 100%;
		height: auto;
	}

	label {
		display: block;
		margin-top: 1em;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'] {
		height: 2rem;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'],
	textarea {
		width: 100%;
		box-sizing: border-box;
	}

	fieldset {
		margin-top: 1em;
	}

	fieldset label {
		font-size: 0.8rem;
	}

	/* 
Alignment fix:
https://stackoverflow.com/questions/13509883/how-to-vertically-align-a-html-radio-button-to-its-label
*/
	fieldset input[type='radio'] {
		margin-top: -1px;
		vertical-align: middle;
	}

	form button {
		font-size: inherit;
		font-family: inherit;
		display: block;
		width: 100%;
		border: none;
		padding: 1em 2em;
		background-color: #274e13;
		color: #fff;
	}

	address {
		font-style: normal;
		text-align: center;
		margin: 3em auto;
	}

	address p {
		line-height: 1;
	}

	.map iframe {
		height: 450px;
		width: 100%;
	}

	@media screen and (min-width: 479px) {
		/* Contact page */
		#form-section img {
			max-width: 65%;
		}
	}

	@media screen and (min-width: 749px) {
		/* Contact page */
		#form-section .content-container {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			justify-content: space-between;
		}

		#form-section .content-container form {
			width: 55%;
		}

		#form-section .img-container {
			width: 45%;
			margin-left: 2em;
		}

		#form-section .img-container img {
			max-width: initial;
		}

		.double-field {
			display: flex;
		}

		.double-field div {
			width: 48%;
		}

		.double-field > div + div {
			margin-left: auto;
		}

		#form-section img {
			border: 10px solid #274e13;
		}

		form button {
			width: initial;
			margin-left: auto;
		}
	}
</style>
