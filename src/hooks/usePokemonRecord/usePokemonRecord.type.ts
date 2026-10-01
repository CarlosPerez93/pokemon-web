export type PokemonRecordInput = {
    url?: string
    name?: string
    onTypesLoaded?: (name: string, types: string[]) => void
}
