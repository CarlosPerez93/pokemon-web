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
}
