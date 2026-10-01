import { ReloadOutlined } from '@ant-design/icons'

import './FeatureError.css'
import { FeatureErrorProps } from './FeatureError.type'

export const FeatureError = ({ onRetry }: FeatureErrorProps) => (
    <div className='feature-error' role='alert'>
        <span>Specimen record could not be loaded.</span>
        <button type='button' onClick={onRetry} aria-label='Retry loading specimen'>
            <ReloadOutlined /> Retry
        </button>
    </div>
)
