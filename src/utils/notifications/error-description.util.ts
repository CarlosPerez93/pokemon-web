export const getErrorDescription = (error: unknown): string => {
    if (typeof error === 'string') return error
    if (error instanceof Error) return error.message
    if (typeof error !== 'object' || error === null)
        return 'An unexpected error occurred.'

    if ('response' in error) {
        const response = error.response
        if (
            typeof response === 'object' &&
            response !== null &&
            'data' in response
        ) {
            const data = response.data
            if (
                typeof data === 'object' &&
                data !== null &&
                'message' in data &&
                typeof data.message === 'string'
            ) {
                return data.message
            }
        }
    }

    return 'message' in error && typeof error.message === 'string'
        ? error.message
        : 'An unexpected error occurred.'
}
