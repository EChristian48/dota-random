import { urlBuilder } from '$lib/api';
import type { Hero } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET = (async ({ fetch }) => {
	const params = new URLSearchParams({ language: 'english' });
	const response = await fetch(urlBuilder('herolist', { params }));

	const data = await response.json();
	const heroes = data.result.data.heroes as Array<Hero>;

	return json({
		heroes
	});
}) satisfies RequestHandler;

export const prerender = true;
