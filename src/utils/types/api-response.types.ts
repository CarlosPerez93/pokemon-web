type BaseResponse<T> = {
    count: number
    previous?: string
    next: string
    results: T
}

type Success<T> = { payload: T; status: 'success' | string }
type Failure = { status: 'error' | string }

export type ApiResponseError<T = unknown> = BaseResponse<T> & Failure
export type ApiResponse<T = unknown> = BaseResponse<T> & Success<T>
export type ApiResponseSuccess<T = unknown, V = unknown> = {
    data: ApiResponse<T>
    variables: V
}
