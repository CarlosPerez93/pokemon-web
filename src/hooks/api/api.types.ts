import { ResponseGeneric } from '@utils/api/response-generic.type'
import { ApiResponseError, ApiResponseSuccess } from '@utils/types/api-response.types'

export type ResponseState<T> = {
    loading: boolean
    error?: boolean
    data: ResponseGeneric<T>
}

export type MutationType = {
    cancelError?: boolean
    onCompleted: <T = unknown, V = unknown>({
        data,
        variables,
    }: ApiResponseSuccess<T, V>) => void
    onError?: ({ count, next, previous, status }: ApiResponseError) => void
}

export type QueryType<T> = Omit<MutationType, 'onCompleted'> & {
    variables?: T
    cancelFirstEffect?: boolean
    onError?: (error: unknown) => void
}

export type Func<T> = {
    functionFetch: (variables?: unknown) => Promise<ResponseGeneric<T>>
}

export type ExecFunction = <N>(variables: N) => void
