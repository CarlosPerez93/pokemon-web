import { ResponsePoke } from '../../../utils/api/pokemon-record.types'

import './DossierDataStrip.css'

type DossierDataStripProps = {
    pokemon: ResponsePoke
}

export const DossierDataStrip = ({ pokemon }: DossierDataStripProps) => (
    <section className='dossier-data-strip' aria-label='Registry telemetry'>
        <div>
            <strong>18</strong>
            <span>
                ELEMENTAL TYPES
                <br />
                ALL MAPPED
            </span>
        </div>
        <div>
            <strong>{pokemon.moves.length.toLocaleString()}</strong>
            <span>
                CATALOGED MOVES
                <br />
                SPECIES RECORD
            </span>
        </div>
        <div>
            <strong>{pokemon.base_experience ?? '—'}</strong>
            <span>
                BASE EXPERIENCE
                <br />
                GROWTH TELEMETRY
            </span>
        </div>
        <div>
            <strong>ONLINE</strong>
            <span>
                LOCAL SENSOR CACHE
                <br />
                SYNCHRONIZED
            </span>
        </div>
    </section>
)
