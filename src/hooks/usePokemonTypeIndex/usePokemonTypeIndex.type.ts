export type PokemonTypeIndexResult = {
    loadedTypes: Record<string, string[]>
    onTypesLoaded: (name: string, types: string[]) => void
}
