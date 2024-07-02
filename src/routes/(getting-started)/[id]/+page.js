/** @type {import('./$types').PageLoad} */
import { activities } from '$lib/stores/activities';
export function load({ params }) {
	const activity = activities.find((activity) => activity.id === params.id);
	return {
		id: params.id,
		activity
	};
}
