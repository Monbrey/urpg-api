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
	pokemon: Array<Required<Omit<SpeciesAbility, "ability">>>;
}

export interface AlteredForm {
	attacksThatDifferByForm: string[];
	species: Species;
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
	target: AttackTarget;
	contact: boolean;
	snatch: boolean;
	substitute: boolean;
	sheerForce: boolean;
	magicCoat: boolean;
	rseContestAttribute: Attribute;
	rseContestMoveType: ContestMoveType;
	orasContestAttribute: Attribute;
	orasContestMoveType: ContestMoveType;
	advContestAttribute: Attribute;
	advContestMoveType: ContestMoveType;
	tm: Item;
	pokemon: Array<Required<Omit<SpeciesAttack, "attack">>>;
	contestCombos: ContestCombo[];
}

export interface AttackTarget {
	dbid: number;
	name: Target;
	description: string;
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

export interface CosmeticForm {
	formName: string;
	name: string;
}

export interface CreativeRank {
	dbid: number;
	name: string;
	requirement: string;
}

export interface EarnedRibbon {
	attribute: Attribute;
	dbid: number;
	pokemon: OwnedPokemon;
	rank: string;
	spent: boolean;
	url: string;
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

export interface Gym {
	badge: string;
	dbid: number;
	draws: number;
	league: GymLeague;
	losses: number;
	name: string;
	openDate: Date;
	owner: Member;
	pokemon: OwnedPokemon[];
	tm: Item;
	wins: number;

}

export interface GymLeague {
	dbid: number;
	gyms: Gym[];
	name: string;
}

export interface Item {
	dbid: number;
	name: string;
	price: number;
	type: string;
	description?: string;
}

export interface LegendaryProgress {
	date: Date;
	dbid: number;
	logUrl: string;
	section: Section;
	trainer: Member;
	value: number;
}

export interface MegaEvolution {
	species: Species;
	typeMatchups: TypeMatchup[];
}

export interface Member {
	banExpiration: Date;
	banned: boolean;
	bot: boolean;
	championVictories: Array<Required<Omit<Victory, "challenger">>>;
	dbid: number;
	discordId: string;
	draws: number;
	eliteFourVictories: Array<Required<Omit<Victory, "challenger">>>;
	gymVictories: Array<Required<Omit<GymVictory, "challenger">>>;
	gyms: Gym[];
	items: OwnedItem[];
	joinDate: Date;
	legendaryProgress: LegendaryProgress[];
	losses: number;
	money: number;
	pokemon: OwnedPokemon[];
	roles: Role[];
	username: string;
	wins: number;
}

export interface OwnedItem {
	item: Item;
	quantity: number;
	trainer: Member;
}

export interface OwnedPokemon {
	box: boolean;
	dbid: number;
	earnedRibbons: EarnedRibbon[];
	exp: number;
	fullyEvolved: boolean;
	gender: string;
	hiddenPowerLink: string;
	hiddenPowerType: Type;
	job: boolean;
	nature: string;
	nickname: string;
	obtained: string;
	obtainedLink: string;
	ownedExtraMoves: Attack[];
	ownedHiddenAbilities: Ability[];
	rental: boolean;
	species: Species;
	trainer: Member;
	uft: boolean;
}

export interface PokedexEntry {
	alteredForms: AlteredForm;
	attacksThatDifferByForm: string[];
	evolutionFamily: Species[][];
	megaEvolutions: MegaEvolution[];
	nextDex: Species;
	prevDex: Species;
	species: Species;
}

export interface Role {
	dbid: number;
	name: string;
	permissions: string[];
}

export interface Section {
	dbid: number;
	name: string;
	tier1LegendaryRequirement: number;
	tier2LegendaryRequirement: number;
}

export interface SpeciesAbility {
	ability: Partial<Ability>;
	species: Partial<Species>;
	hidden: boolean;
}

export interface SpeciesAttack {
	attack: Partial<Attack>;
	generation: number;
	method: Method;
	species?: Partial<Species>;
}

export interface Species {
	abilities: SpeciesAbility[];
	alteredFormMethod?: string[];
	artRank: CreativeRank;
	attack: number;
	attacks: SpeciesAttack[];
	classification: string;
	cosmeticForms: CosmeticForm[];
	dbid: number;
	defense: number;
	dexno: number;
	displayName: string;
	evolutionExpRequirement?: number;
	evolutionMethod?: string;
	femaleAllowed: boolean;
	formName?: string;
	height: number;
	hp: number;
	legenderyTier: number;
	maleAllowed: boolean;
	megastone?: string;
	megaSuffix?: string;
	name: string;
	parkLocation: Location;
	parkRank: CreativeRank;
	pokemart?: number;
	preEvolution?: Partial<Species>;
	preMega?: unknown;
	specialAttack: number;
	specialDefense: number;
	speed: number;
	storyRank: CreativeRank;
	type1: Type;
	type2?: Type;
	weight: number;
}

export interface TypeMatchup {
	type: string;
	multiplier: number;
}

export interface User {
	username: string;
	roles: string[];
}

export interface Victory {
	challenger?: Member;
	date: Date;
	defender?: string;
	logUrl: string;
}

export interface GymVictory extends Victory {
	gym: Gym;
	league: GymLeague;
}

export type Matched<T> = {
	value: T;
	rating: number;
};
