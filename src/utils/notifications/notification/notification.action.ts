import { notification } from 'antd'
import { getErrorDescription } from '../errorDescription'
import { NotificationPlacement } from '../notification-placement.type'

export { getErrorDescription } from '../errorDescription'
const defaultPlacement = 'bottomRight'

const successNotification = (
    description: string,
    placement: NotificationPlacement = defaultPlacement,
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
    placement: NotificationPlacement = defaultPlacement,
) => {
    notification.open({ type: 'info', message: 'Info', description, placement })
}

const errorNotification = (
    error: unknown,
    placement: NotificationPlacement = defaultPlacement,
) => {
    notification.open({
        type: 'error',
        message: 'Error',
        placement,
        description: getErrorDescription(error),
    })
}

export { successNotification, errorNotification, infoNotification }
