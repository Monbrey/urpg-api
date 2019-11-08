export type PokemonType = "NORMAL" | "GRASS" | "FIRE" | "WATER" | "BUG" | "POISON" | "FLYING" | "ELECTRIC" | "GROUND" | "FAIRY" | "FIGHTING" | "PSYCHIC" | "ROCK" | "STEEL" | "ICE" | "GHOST" | "DRAGON" | "DARK";

export interface IAbility {
    dbid: number,
    name: string,
    description: string;
}

export interface IAttack {
    dbid: number,
    name: string,
    type: PokemonType,
    description: string,
    power: number,
    accuracy: number,
    pp: number,
    category: string,
    target: IAttackTarget;
    contact: boolean,
    snatch: boolean,
    substitute: boolean,
    sheerForce: boolean,
    magicCoat: boolean,
    rseContestAttribute: string,
    rseContestMoveType: IContestMoveType,
    dppContestAttribute: string,
    dppContestMoveType: IContestMoveType,
    orasContestAttribute: string,
    orasContestMoveType: IContestMoveType;
}

export interface IAttackTarget {
    dbid: number,
    name: string,
    description: string
}

export interface IBasePokemon {
    dbid: number;
    dexno: number;
    name: string;
    type1: PokemonType;
    type2: PokemonType;
    classification: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefence: number;
    speed: number;
    height: number;
    weight: number;
    maleAllowed: boolean;
    femaleAllowed: boolean;
    pokemart: number;
    storyRank: ICreativeRank;
    artRank: ICreativeRank;
    parkRank: ICreativeRank;
    parkLocation: ILocation;
    contestCredits: number;
    displayName: string;
    formName: string;
    typeMatchups: ITypeMatchup[];
}

export interface IContestMoveType {
    dbid: number,
    name: string,
    description: string,
    score: number,
    jam: number
}

export interface ICreativeRank {
    dbid: number;
    name: string;
    requirement: string;
}

export interface IEvolution {
    dbid: number;
    name: string;
    displayName: string;
    method: string;
    dexno: number;
}

export interface IEvolvesFrom {
    name: string;
    method: string;
}

export interface ILocation {
    dbid: number;
    name: string;
}

export interface IMegaEvolvesFrom {
    name: string;
    megastone: string;
}

export interface IPokemon extends IBasePokemon {
    attacks?: IPokemonAttack[];
    abilities?: IPokemonAbility[];
    alteredForms: any;
    uniqueMoves: any;
    evolutionFamily: IEvolution[][];
    evolvesFrom: IEvolvesFrom;
    megaEvolvesFrom: IMegaEvolvesFrom;
}

export interface IPokemonAbility extends IAbility {
    hidden: boolean;
}

export interface IPokemonAttack extends IAttack {
    method: string;
    generation: number;
}

export interface IPokemonMega extends IBasePokemon {
    ability: IPokemonAbility;
    megastone: string;
}

export interface ITypeMatchup {
    name: string;
    multiplier: number;
}
