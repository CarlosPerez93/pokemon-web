export type PokeList = {
    name?: string
    url: string
}

export interface ResponseFetch {
    count: number
    next: string
    previous: string
    results: PokeList[]
}
