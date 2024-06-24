<script>
	import Tips from '$lib/components/Tips.svelte';
	import Title from '$lib/components/Title.svelte';

	let { data } = $props();
	const { id, activities } = $derived(data);
	const activity = $derived(activities.find((activity) => activity.id === id));
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
