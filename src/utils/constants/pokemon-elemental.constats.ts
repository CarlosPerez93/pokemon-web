const RELATIONS: Record<string, string[]> = {
    fire: ['grass', 'ice', 'bug', 'steel'],
    flying: ['grass', 'fighting', 'bug'],
    water: ['fire', 'ground', 'rock'],
    grass: ['water', 'ground', 'rock'],
    electric: ['water', 'flying'],
    ground: ['fire', 'electric', 'poison', 'rock', 'steel'],
    rock: ['fire', 'ice', 'flying', 'bug'],
    steel: ['ice', 'rock', 'fairy'],
}

const IMMUNITIES: Record<string, string[]> = {
    flying: ['ground'],
    steel: ['poison'],
}

export { RELATIONS, IMMUNITIES }
