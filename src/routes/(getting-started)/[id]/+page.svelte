<script>
	import Tips from '$lib/components/Tips.svelte';
	import Title from '$lib/components/Title.svelte';

	let { data } = $props();
	const { id, activity } = $derived(data);
	const { title, subtitle } = $derived(activity);
</script>

<Title {title} {subtitle} />
<Tips {activity} />
<hr />

<style>
	hr {
		margin-top: 3em;
	}
</style>
