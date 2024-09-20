import { useState, useEffect } from 'react'

import { state, queryType, func } from './api.types'
import { errorNotification } from '../../utils/notifications/notification.action'

export const useGet = <T>(
    { functionFetch }: func,
    { cancelFirstEffect, cancelError, onError, variables }: queryType<T> = {}
) => {
    const [req, setReq] = useState<state<T>>({
        data: {} as T,
        loading: false,
        error: false,
    })

    useEffect(() => {
        if (!cancelFirstEffect) getData()
    }, [cancelFirstEffect])

    const getData = async (newVariables?: T) => {
        const fetchVariables = !newVariables ? variables : newVariables

        setReq({ data: {} as T, loading: true, error: false })
        try {
            const data = await functionFetch(fetchVariables)

            if ((data && data.count > 0) || data) {
                setReq({ data, loading: false })
                return data
            } else {
                setReq({ data: {} as T, loading: false, error: true })
                return undefined
            }
        } catch (error: any) {
            if (!cancelError) errorNotification(error)
            setReq({ data: {} as T, loading: false, error: true })

            if (onError) onError(error)
        }
    }

    return { ...req, refetch: getData }
}
