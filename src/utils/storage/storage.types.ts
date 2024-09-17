export type Payload = {
    key?: string
    newItem: string
    type?: 'sessionStorage' | 'localStorage'
}

export type Key = Omit<Payload, 'newItem'>

export type Token = {
    iat: number
    exp: number
}
