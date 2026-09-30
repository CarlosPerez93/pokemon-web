export const POKEMON_TYPE_NAMES = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
] as const

export const POKEMON_TYPE_COLORS: Record<(typeof POKEMON_TYPE_NAMES)[number], string> = {
    normal: '#8b95a7', fire: '#f97316', water: '#0ea5e9',
    electric: '#ca8a04', grass: '#10b981', ice: '#0891b2',
    fighting: '#dc2626', poison: '#a855f7', ground: '#d97706',
    flying: '#6366f1', psychic: '#db2777', bug: '#65a30d',
    rock: '#78716c', ghost: '#7c3aed', dragon: '#4f46e5',
    dark: '#475569', steel: '#64748b', fairy: '#ec4899',
}
