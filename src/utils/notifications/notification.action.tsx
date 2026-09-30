import { notification } from 'antd'

const defaultPlacement = 'bottomRight'
type Placement =
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'

const getErrorDescription = (error: unknown): string => {
    if (typeof error === 'string') return error
    if (error instanceof Error) return error.message

    if (typeof error === 'object' && error !== null) {
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
        if ('message' in error && typeof error.message === 'string')
            return error.message
    }

    return 'An unexpected error occurred.'
}

const successNotification = (
    description: string,
    placement: Placement = defaultPlacement,
) => {
    notification.open({
        type: 'success',
        message: 'Success',
        description,
        placement,
    })
}

const infoNotification = (
    description: string,
    placement: Placement = defaultPlacement,
) => {
    notification.open({ type: 'info', message: 'Info', description, placement })
}

const errorNotification = (
    error: unknown,
    placement: Placement = defaultPlacement,
) => {
    notification.open({
        type: 'error',
        message: 'Error',
        placement,
        description: getErrorDescription(error),
    })
}

export {
    successNotification,
    errorNotification,
    infoNotification,
    getErrorDescription,
}
