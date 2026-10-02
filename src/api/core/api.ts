import { GetItem } from '@utils/storage'
import { query } from '@api/core/api.types'
import { getHeader, getUrl } from '@utils/api/api.util'

export const Query = async ({ url, params }: query) => {
    const newUrl = getUrl({ url, params })

    const response = await fetch(newUrl, {
        method: 'GET',
        ...getHeader(GetItem({})),
    })
    if (!response.ok)
        throw new Error(`Request failed with status ${response.status}`)
    return response.json()
}

export default Query
