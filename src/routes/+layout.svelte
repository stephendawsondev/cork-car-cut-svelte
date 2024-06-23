<script>
	let { children } = $props();
	import { activities } from '$lib/stores/activities';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header {activities} />
<!-- Main Content -->
<main>
	{@render children({ activities })}
</main>

<!-- Footer -->
<Footer />
