import { ResponseFetch } from '../../utils/api/api.util'
import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../utils/types/response.type'

export type ResponseState<T> = {
    loading: boolean
    error?: boolean
    data: ResponseFetch<T>
}

export type MutationType = {
    cancelError?: boolean
    onCompleted: <T = unknown, V = unknown>({
        data,
        variables,
    }: ApiResponseSuccess<T, V>) => void
    onError?: ({ message, status, statusCode }: ApiResponseError) => void
}

export type QueryType<T> = Omit<MutationType, 'onCompleted'> & {
    variables?: T
    cancelFirstEffect?: boolean
}

export type Func<T> = {
    functionFetch: (variables: any) => Promise<ResponseFetch<T>>
}

export type ExecFunction = <N>(variables: N) => void
