import { formatGenderRate } from '@utils/functions/formatGenderRate'
import { DossierClassificationProps } from './DosierClassification.type'

import './DossierClassification.css'

export const DossierClassification = ({ species }: DossierClassificationProps) => (
    <section className='dossier-classification' aria-label='Classification data'>
        <div className='section-kicker'>CLASSIFICATION & BREEDING</div>
        <div className='dossier-classification__grid'>
            <div>
                <span>EGG GROUPS</span>
                <strong>
                    {species?.egg_groups?.length
                        ? species.egg_groups
                              .map(group => group.name.replace('-', ' '))
                              .join(', ')
                        : 'Unknown'}
                </strong>
            </div>
            <div>
                <span>GROWTH RATE</span>
                <strong>
                    {species?.growth_rate?.name.replace('-', ' ') ?? 'Unknown'}
                </strong>
            </div>
            <div>
                <span>CAPTURE RATE</span>
                <strong>{species?.capture_rate ?? '—'}</strong>
            </div>
            <div>
                <span>BASE HAPPINESS</span>
                <strong>{species?.base_happiness ?? '—'}</strong>
            </div>
            <div>
                <span>GENDER RATIO</span>
                <strong>{formatGenderRate(species?.gender_rate)}</strong>
            </div>
            <div>
                <span>RARITY CLASS</span>
                <strong>
                    {species?.is_mythical
                        ? 'Mythical'
                        : species?.is_legendary
                          ? 'Legendary'
                          : 'Standard'}
                </strong>
            </div>
        </div>
    </section>
)
