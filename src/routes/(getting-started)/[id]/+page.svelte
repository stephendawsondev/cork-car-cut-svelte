<script>
	import Tips from '$lib/components/Tips.svelte';
	import Title from '$lib/components/Title.svelte';

	let { data } = $props();
	const { id, activities } = $derived(data);
	const activity = $derived(activities.find((activity) => activity.id === id));
	const { title, subtitle, tips, id: activityId } = $derived(activity);
</script>

<Title {title} {subtitle} />
<Tips {tips} {activityId} />
<hr />

<style>
	hr {
		margin-top: 3em;
	}
</style>
