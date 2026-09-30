import { query } from '@api/core/api.types'
import { URL_API } from '@utils/constants/environment.constant'

export const getHeader = (token: string | null) => {
    const exists = token !== null && { Authorization: `Bearer ${token}` }
    return {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'https://javascript.info',
            ...exists,
        },
    }
}

export const getUrl = ({ url, params }: query): URL => {
    const _url = new URL(`${URL_API}${url}`)
    if (params)
        Object.keys(params).forEach(key =>
            _url.searchParams.append(key, params[parseInt(key)]),
        )

    return _url
}

export const validateResponse = (status: string) => status

export * from './pokemon-list.types'
export * from './pokemon-record.types'
export * from './pokemon-species.types'
export type { ResponseGeneric } from './response-generic.type'
