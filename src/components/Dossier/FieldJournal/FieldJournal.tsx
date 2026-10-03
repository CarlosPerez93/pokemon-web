import { FieldJournalProps } from './FieldJournal.type'

import './FieldJournal.css'

export const FieldJournal = ({ pokemon, species }: FieldJournalProps) => {
    const habitat = species?.habitat?.name.replace('-', ' ') ?? 'Volcanic crags'
    const genus =
        species?.genera?.find(({ language }) => language.name === 'en')?.genus ??
        'High-Altitude Aerodynamic Gliding'
    const note =
        species?.flavor_text_entries
            ?.find(({ language }) => language.name === 'en')
            ?.flavor_text.replace(/[\n\f]/g, ' ') ??
        'Field observations remain synchronized with the national research archive.'

    return (
        <section className='field-journal' aria-label='Naturalist field journal'>
            <div className='field-journal__heading'>
                <h2>Naturalist Field Journal & Morphological Records</h2>
                <span className='section-kicker'>CLASSIFICATION: {genus}</span>
            </div>
            <div className='field-journal__grid'>
                <article>
                    <span>01 / FLIGHT DYNAMICS & HABITAT</span>
                    <h3>{genus}</h3>
                    <p>
                        {pokemon.name} traverses mountainous terrain above {habitat}.
                        Its leathery wings generate massive downwash and facilitate
                        effortless long-distance aerial travel.
                    </p>
                </article>
                <article>
                    <span>02 / PYROKINETIC METABOLISM</span>
                    <h3>Internal Plasma Combustion Chamber</h3>
                    <p>
                        Specialized organs sustain superheated air and elemental
                        output under prolonged field conditions.
                    </p>
                </article>
                <article>
                    <span>03 / ETHOLOGY & SOCIAL AGGRESSION</span>
                    <h3>Honorific Combat Temperament</h3>
                    <p>
                        Fieldologists observe territorial behavior and highly
                        responsive defensive patterns around its habitat.
                    </p>
                </article>
            </div>
            <blockquote>
                <strong>99</strong>
                <p>{note}</p>
            </blockquote>
        </section>
    )
}

export default FieldJournal
