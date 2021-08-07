export type Attribute =
    "Cool" |
    "Beauty" |
    "Cute" |
    "Smart" |
    "Tough";

export type Category =
    "Physical" |
    "Special" |
    "Status";

export type Method =
    "LEVEL-UP" |
    "TM" |
    "HM" |
    "BREEDING" |
    "MOVE TUTOR" |
    "SPECIAL";

export type Target =
    "All Adjacent Opponents" |
    "All Adjacent Pokemon" |
    "Any Adjacent Ally" |
    "Any Adjacent Ally or Self" |
    "Any Adjacent Opponent" |
    "Any Adjacent Pokemon" |
    "Any Adjacent Pokemon or Self" |
    "Any Pokemon" |
    "Battlefield - All" |
    "Battlefield - Opponent" |
    "Battlefield - Self" |
    "Random" |
    "Random Adjacent Opponent" |
    "Self";

export type Type =
    "NONE" |
    "NORMAL" |
    "GRASS" |
    "FIRE" |
    "WATER" |
    "BUG" |
    "POISON" |
    "FLYING" |
    "ELECTRIC" |
    "GROUND" |
    "FAIRY" |
    "FIGHTING" |
    "PSYCHIC" |
    "ROCK" |
    "STEEL" |
    "ICE" |
    "GHOST" |
    "DRAGON" |
    "DARK";
export interface Ability {
	dbid: number;
	name: string;
	description: string;
	pokemon: AbilitySpecies[];
}

export interface AbilitySpecies {
	species: Partial<Species>;
	hidden: boolean;
}

export interface CreativeRank {
	dbid: number;
	name: string;
	requirement: string;
}

export interface Attack {
	dbid: number;
	name: string;
	type: Type;
	description: string;
	power: number;
	accuracy: number;
	pp: number;
	category: Category;
	target: Target;
	contact: boolean;
	snatch: boolean;
	substitute: boolean;
	sheerForce: boolean;
	magicCoat: boolean;
	rseContestAttribute: Attribute;
	rseContestMoveType: ContestMoveType;
	dppContestAttribute: Attribute;
	dppContestMoveType: ContestMoveType;
	orasContestAttribute: Attribute;
	orasContestMoveType: ContestMoveType;
	advContestAttribute: Attribute;
	advContestMoveType: ContestMoveType;
	tm: Item;
	pokemon: AttackSpecies[];
	contestCombos: ContestCombo[];
}

export interface AttackSpecies {
	species: Partial<Species>;
	method: Method;
	generation: number;
}

export interface AttackTarget {
	dbid: number;
	name: string;
	description: string;
}

export interface BaseSpecies {
	dbid: number;
	dexno: number;
	name: string;
	type1: Type;
	type2?: Type;
	classification: string;
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
	height: number;
	weight: number;
	maleAllowed: boolean;
	femaleAllowed: boolean;
	pokemart: number;
	storyRank: CreativeRank;
	artRank: CreativeRank;
	parkRank: CreativeRank;
	parkLocation: Location;
	contestCredits: number;
	displayName: string;
	formName: string;
	typeMatchups: TypeMatchup[];
}

export interface ContestCombo {
	firstAttack: string;
	secondAttack: string;
	overpowered: boolean;
	contestType: string;
}

export interface ContestMoveType {
	dbid: number;
	description: string;
	jam: number;
	name: string;
	score: number;
}

export interface CreativeRank {
	dbid: number;
	name: string;
	requirement: string;
}

export interface Evolution {
	dbid: number;
	name: string;
	displayName: string;
	method: string;
	dexno: number;
}

export interface EvolvesFrom {
	name: string;
	method: string;
}

export interface Item {
	dbid: number;
	name: string;
	price: number;
	type: string;
	description: string;
}

export interface MegaEvolvesFrom {
	name: string;
	megastone: string;
}

export interface Role {
	dbid: number;
	name: string;
	permissions: string[];
}
export interface SpeciesAbility extends Ability {
	hidden: boolean;
}

export interface SpeciesAttack extends Attack {
	method: string;
	generation: number;
}

export interface SpeciesMega extends BaseSpecies {
	type1: Type;
	type2?: Type;
	ability: SpeciesAbility;
	megastone: string;
}

export interface Species extends BaseSpecies {
	type1: Type;
	type2: Type;
	attacks: SpeciesAttack[];
	abilities: SpeciesAbility[];
	alteredForms: unknown;
	uniqueMoves: unknown;
	evolutionFamily: Evolution[][];
	megaEvolutions: SpeciesMega[];
	evolvesFrom: EvolvesFrom;
	megaEvolvesFrom: MegaEvolvesFrom;
}

export interface TypeMatchup {
	name: string;
	multiplier: number;
}

export interface User {
	username: string;
	roles: string[];
}

export type Matched<T> = {
	value: T;
	rating: number;
};
