import { useState } from 'react'

import { ResponseFetch } from '../../utils/api/api.util'
import { Status } from '../../utils/constants/status.enum'
import { HttpStatus } from '../../utils/types/response.type'
import { MutationType, ResponseState, Func, ExecFunction } from './api.types'
import { errorNotification } from '../../utils/notifications/notification.action'

const validCases = [HttpStatus.ACCEPTED, HttpStatus.OK, HttpStatus.CREATED]

export const useMutation = <T>(
    { functionFetch }: Func<T>,
    { onCompleted, cancelError, onError }: MutationType
): [ExecFunction, ResponseState<T>] => {
    const [req, setReq] = useState<ResponseState<T>>({
        loading: false,
        error: false,
        data: {} as ResponseFetch<T>,
    })

    const execFunction = async <N>(variables: N) => {
        setReq({ loading: true, error: false, data: {} as ResponseFetch<T> })
        try {
            const data = await functionFetch(variables)
            if (
                validCases.includes(data.statusCode) &&
                data.status === Status.success
            ) {
                setReq({ data, loading: false })
                if (onCompleted) onCompleted<T, N>({ data, variables })
                return data
            } else {
                setReq({ loading: false, error: true, data })
                if (onError && data.status === 'error') onError(data)
                return undefined
            }
        } catch (error: any) {
            if (!cancelError) errorNotification(error)
            setReq({ loading: false, error: true, data: {} as ResponseFetch<T> })
            if (onError) onError(error)
            return undefined
        }
    }

    return [execFunction, { ...req }]
}
