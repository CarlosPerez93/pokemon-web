import { useCallback, useState, useEffect } from 'react'

import { ResponseGeneric } from '@utils/api/response-generic.type'
import { ResponseState, QueryType, Func } from './api.types'
import { errorNotification } from '@utils/notifications/notification.action'

export const useGet = <T>(
    { functionFetch }: Func<T>,
    { cancelFirstEffect, cancelError, onError, variables }: QueryType<T> = {},
) => {
    const [req, setReq] = useState<ResponseState<T>>({
        data: {} as ResponseGeneric<T>,
        loading: !cancelFirstEffect,
        error: false,
    })

    const getData = useCallback(
        async (newVariables?: T) => {
            const fetchVariables = !newVariables ? variables : newVariables

            setReq({ data: {} as ResponseGeneric<T>, loading: true, error: false })
            try {
                const data = await functionFetch(fetchVariables)

                if (data) {
                    setReq({ data, loading: false })
                    return data
                } else {
                    setReq({ data, loading: false, error: true })
                    return undefined
                }
            } catch (error: unknown) {
                if (!cancelError) errorNotification(error)
                setReq({
                    data: {} as ResponseGeneric<T>,
                    loading: false,
                    error: true,
                })

                if (onError) onError(error)
            }
        },
        [cancelError, functionFetch, onError, variables],
    )

    useEffect(() => {
        if (!cancelFirstEffect) void getData()
    }, [cancelFirstEffect, getData])

    return { ...req, refetch: getData }
}
