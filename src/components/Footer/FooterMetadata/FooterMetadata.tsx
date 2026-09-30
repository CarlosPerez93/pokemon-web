import './FooterMetadata.css'

const METADATA = [
    ['Terminal Build', '2.4.0-FIELD'],
    ['Core Engine', 'POKÉAPI LIVE'],
    ['Favorite Cache', 'LOCAL STORAGE'],
]

export const FooterMetadata = () => (
    <section className='footer-app__group footer-app__metadata'>
        <h2>Archive Metadata</h2>
        {METADATA.map(([label, value]) => (
            <span key={label}>
                {label} <strong>{value}</strong>
            </span>
        ))}
    </section>
)
