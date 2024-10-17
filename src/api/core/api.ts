import { query } from './api.types'
import { GetItem } from '../../utils/storage'
import { getHeader, getUrl } from '../../utils/api/api.util'

const Query = async ({ url, params }: query) => {
    const newUrl = getUrl({ url, params })

    return fetch(newUrl, { method: 'GET', ...getHeader(GetItem({})) })
        .then(async res => {
            res = await res.json()
            return res
        })
        .catch(error => error)
}

export { Query }
