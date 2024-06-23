/** @type {import('./$types').PageLoad} */
import { activities } from '$lib/stores/activities';
export function load({ params }) {
	return {
		id: params.id,
		activities
	};
}
