import { getRandomHero, type GetRandomHeroOptions } from './heroes';
import type { Hero } from './types';
import { describe, it, expect } from 'vitest';

describe('getRandomHero', () => {
	const heroes: Array<Hero> = [
		{
			id: 1,
			name: 'npc_dota_hero_antimage',
			name_loc: 'npc_dota_hero_antimage',
			name_english_loc: 'npc_dota_hero_antimage',
			primary_attr: 0,
			complexity: 1
		},
		{
			id: 2,
			name: 'npc_dota_hero_antimage',
			name_loc: 'npc_dota_hero_antimage',
			name_english_loc: 'npc_dota_hero_antimage',
			primary_attr: 1,
			complexity: 2
		},
		{
			id: 3,
			name: 'npc_dota_hero_antimage',
			name_loc: 'npc_dota_hero_antimage',
			name_english_loc: 'npc_dota_hero_antimage',
			primary_attr: 2,
			complexity: 3
		},
		{
			id: 4,
			name: 'npc_dota_hero_antimage',
			name_loc: 'npc_dota_hero_antimage',
			name_english_loc: 'npc_dota_hero_antimage',
			primary_attr: 3,
			complexity: 1
		}
	];

	it('should return a random hero when no options are provided', () => {
		const randomHero = getRandomHero(heroes);
		expect(heroes).toContain(randomHero);
	});

	it('should return a hero with the specified primary_attr', () => {
		const options: GetRandomHeroOptions = { primary_attr: [0] };
		const randomHero = getRandomHero(heroes, options);
		expect(randomHero.primary_attr).toEqual(0);
	});

	it('should return a hero with the specified complexity', () => {
		const options: GetRandomHeroOptions = { complexity: [1] };
		const randomHero = getRandomHero(heroes, options);
		expect(randomHero.complexity).toEqual(1);
	});

	it('should return a hero with the specified primary_attr and complexity', () => {
		const options: GetRandomHeroOptions = { primary_attr: [1], complexity: [2] };
		const randomHero = getRandomHero(heroes, options);
		expect(randomHero.primary_attr).toEqual(1);
		expect(randomHero.complexity).toEqual(2);
	});
});
