import type { Hero } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const response = await fetch('/api/hero');

  const data = await response.json();
  const heroes = data.heroes as Array<Hero>;

  return {
    heroes,
  };
}) satisfies PageLoad;
