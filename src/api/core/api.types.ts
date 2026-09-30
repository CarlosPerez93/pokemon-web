export type mutation = {
    url: string
    params?: string
    body?: unknown
    method: string
}

export type query = Omit<mutation, 'body' | 'method'>
