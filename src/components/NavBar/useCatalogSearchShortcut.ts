import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useCatalogSearchShortcut = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const label = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K'

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            const target = event.target
            const editing = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
            const shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'
            if (editing || (!shortcut && event.key !== '/')) return
            event.preventDefault()
            if (location.pathname !== '/list-pokemon') navigate('/list-pokemon')
            window.setTimeout(() => document.querySelector<HTMLInputElement>('.catalog-search input')?.focus(), 0)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [location.pathname, navigate])

    return label
}
