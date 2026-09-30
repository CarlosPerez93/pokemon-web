import { message } from 'antd'
import { getErrorDescription } from './notification.action'

const infoMessage = (description: string) => message.info(description)

const successMessage = (description: string) => message.success(description)

const warningMessage = (description: string) => message.warning(description)

const errorMessage = (error: unknown) => message.error(getErrorDescription(error), 5)

export { infoMessage, successMessage, warningMessage, errorMessage }
