import type { Hero } from './types';

export interface GetRandomHeroOptions {
	complexity?: Array<Hero['complexity']>;
	primary_attr?: Array<Hero['primary_attr']>;
}

export const getRandomHero = (
	heroes: Array<Hero>,
	options: GetRandomHeroOptions = {
		complexity: [],
		primary_attr: []
	}
) => {
	const { primary_attr = [], complexity = [] } = options;

	const filteredHeroes = heroes.filter((hero) => {
		let matchPrimaryAttr = false;
		let matchComplexity = false;

		if (primary_attr.length === 0) matchPrimaryAttr = true;
		else matchPrimaryAttr = primary_attr.includes(hero.primary_attr);

		if (complexity.length === 0) matchComplexity = true;
		else matchComplexity = complexity.includes(hero.complexity);

		return matchPrimaryAttr && matchComplexity;
	});

	const randomIndex = Math.floor(Math.random() * filteredHeroes.length);
	return filteredHeroes[randomIndex];
};
