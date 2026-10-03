import { DossierTraitPanelProps } from './DossierTraitPanel.type'

import './DossierTraitPanel.css'

export const DossierTraitPanel = ({ abilities }: DossierTraitPanelProps) => (
    <aside className='dossier-trait-panel' aria-label='Intrinsic biological traits'>
        <div className='section-kicker'>INTRINSIC BIOLOGICAL TRAITS</div>
        {abilities.map(({ ability, is_hidden }) => (
            <div className='dossier-trait-panel__trait' key={ability.name}>
                <strong>{ability.name.replace('-', ' ')}</strong>
                <span>
                    {is_hidden ? 'Hidden gene' : 'Standard innate'} · Catalyzes
                    internal fire enzyme production.
                </span>
            </div>
        ))}
    </aside>
)

export default DossierTraitPanel
