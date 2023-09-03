export interface Hero {
	id: number;
	name: string;
	name_loc: string;
	name_english_loc: string;
	/**
	 * The hero's primary attribute
	 *
	 * 0 = strength
	 * 1 = agility
	 * 2 = intelligence
	 * 3 = universal
	 */
	primary_attr: 0 | 1 | 2 | 3;
	complexity: 1 | 2 | 3;
}
