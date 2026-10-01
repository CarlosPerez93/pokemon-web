export interface PokemonSpecies {
    flavor_text_entries: {
        flavor_text: string
        language: { name: string }
    }[]
    genera: {
        genus: string
        language: { name: string }
    }[]
    habitat: { name: string } | null
    egg_groups: { name: string; url: string }[]
    growth_rate: { name: string; url: string }
    capture_rate: number
    base_happiness: number | null
    gender_rate: number
    is_legendary: boolean
    is_mythical: boolean
    evolution_chain: { url: string }
}

export interface EvolutionChainLink {
    species: { name: string; url: string }
    evolves_to: EvolutionChainLink[]
}

export interface EvolutionChain {
    chain: EvolutionChainLink
}
