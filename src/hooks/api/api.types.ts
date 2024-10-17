import { ResponseGeneric } from '../../utils/api/api.util'
import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../utils/types/response.type'

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
}

export type Func<T> = {
    functionFetch: (variables: any) => Promise<ResponseGeneric<T>>
}

export type ExecFunction = <N>(variables: N) => void
