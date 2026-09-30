import { ReloadOutlined } from '@ant-design/icons'

type CatalogErrorStateProps = {
    onRetry: () => void
}

export const CatalogErrorState = ({ onRetry }: CatalogErrorStateProps) => (
    <div className='catalog-state' role='alert'>
        <strong>Unable to retrieve the field index.</strong>
        <span>Check the connection and retry.</span>
        <button type='button' onClick={onRetry}>
            <ReloadOutlined /> Retry
        </button>
    </div>
)
