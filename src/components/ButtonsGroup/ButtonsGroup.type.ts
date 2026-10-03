import { DossierActionsProps } from '@components/Dossier/DossierActions/DossierActions.type'

export type ButtonsGroupProps = Omit<DossierActionsProps, 'cries'> & {
    hasCry: boolean
    isCryPlaying: boolean
    onPlayCry: () => void
}
