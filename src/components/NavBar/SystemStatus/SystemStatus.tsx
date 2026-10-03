import { WifiOutlined } from '@ant-design/icons'

import './SystemStatus.css'

export const SystemStatus = () => (
    <span className='system-status'>
        <WifiOutlined aria-hidden='true' /> SYSTEM ONLINE
    </span>
)

export default SystemStatus
