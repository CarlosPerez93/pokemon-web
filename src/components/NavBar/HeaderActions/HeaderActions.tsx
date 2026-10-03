import { SearchTrigger } from '../SearchTrigger'
import { SystemStatus } from '../SystemStatus'
import { ThemeToggle } from '../ThemeToggle'
import { useCatalogSearchShortcut } from '@hooks/useCatalogSearchShortcut'

import './HeaderActions.css'

export const HeaderActions = () => {
    const shortcut = useCatalogSearchShortcut()
    return (
        <div className='app-header__actions'>
            <SearchTrigger shortcut={shortcut} />
            <SystemStatus />
            <ThemeToggle />
        </div>
    )
}

export default HeaderActions
