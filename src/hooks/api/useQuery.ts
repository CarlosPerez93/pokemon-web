import { useState, useEffect } from 'react'

import { ResponseState, QueryType, Func } from './api.types'
import { HttpStatus } from '../../utils/types/response.type'
import { errorNotification } from '../../utils/notifications/notification.action'
import { ResponseFetch } from '../../utils/api/api.util'

const validCases = [HttpStatus.OK, HttpStatus.NO_CONTENT]

export const useQuery = <T>(
    { functionFetch }: Func<T>,
    { cancelFirstEffect, cancelError, onError, variables }: QueryType<T> = {}
) => {
    const [req, setReq] = useState<ResponseState<T>>({
        data: {} as ResponseFetch<T>,
        loading: false,
        error: false,
    })

    useEffect(() => {
        if (!cancelFirstEffect) getData()
    }, [cancelFirstEffect])

    const getData = async <N = unknown>(newVariables?: N) => {
        const fetchVariables = newVariables ?? variables

        setReq({ data: {} as ResponseFetch<T>, loading: true, error: false })
        try {
            const data = await functionFetch(fetchVariables)
            if (validCases.includes(data.statusCode)) {
                setReq({ data, loading: false })
                return data
            } else {
                setReq({ data: {} as ResponseFetch<T>, loading: false, error: true })
                return undefined
            }
        } catch (error: any) {
            if (!cancelError) errorNotification(error)
            setReq({ data: {} as ResponseFetch<T>, loading: false, error: true })
            if (onError) onError(error)
        }
    }

    return { ...req, refetch: getData }
}
