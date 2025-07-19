import { Space, Tooltip } from 'antd'
import { CardActionsProps } from './actions.type'
import { EyeOutlined, HeartOutlined } from '@ant-design/icons'

export const Actions = ({ onFavorite, onView }: CardActionsProps) => {
    return (
        <Space>
            {onView && (
                <Tooltip title='detail'>
                    <EyeOutlined />
                </Tooltip>
            )}
            {onFavorite && (
                <Tooltip title='favorite'>
                    <HeartOutlined />
                </Tooltip>
            )}
        </Space>
    )
}

export default Actions
