export type PokemonCryResult = {
    hasCry: boolean
    isPlaying: boolean
    play: () => Promise<void>
}
