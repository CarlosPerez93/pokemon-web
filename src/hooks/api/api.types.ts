import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../utils/types/response.type'

export type state<T> = {
    loading: boolean
    error?: boolean
    data: T
}

export type mutationType = {
    cancelError?: boolean
    onCompleted: ({ data, variables }: ApiResponseSuccess) => void
    onError?: ({ message, status, statusCode }: ApiResponseError) => void
}

export type queryType<T> = Omit<mutationType, 'onCompleted'> & {
    variables?: T
    cancelFirstEffect?: boolean
}

export type func = { functionFetch: Function }
