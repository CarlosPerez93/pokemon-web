export interface PokemonTypeSlot {
    slot: number
    type: { name: string; url: string }
}

export interface PokemonStatSlot {
    base_stat: number
    effort: number
    stat: { name: string; url: string }
}

export interface PokemonAbilitySlot {
    ability: { name: string; url: string }
    is_hidden: boolean
    slot: number
}

export interface PokemonMoveSlot {
    move: { name: string; url: string }
}

export interface ResponsePoke<T = unknown> {
    abilities: PokemonAbilitySlot[]
    base_experience: number
    cries: T
    forms: T
    game_indices: T
    height: number
    held_items: T
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: PokemonMoveSlot[]
    name: string
    order: number
    past_abilities: T
    past_types: T
    species: T
    sprites: { front_default?: string | null; other?: Record<string, { front_default?: string | null }> }
    stats: PokemonStatSlot[]
    types: PokemonTypeSlot[]
    weight: number
    url: string
}
