import { Link } from 'react-router-dom'

import './FooterReferences.css'

const REFERENCES = [
    'National Pokédex index',
    'Regional eco-registers',
    'Type matrix & combat dynamics',
    'Morphological classifications',
]

export const FooterReferences = () => (
    <section className='footer-app__group'>
        <h2>Taxonomy Reference</h2>
        {REFERENCES.map(reference => (
            <Link key={reference} to='/list-pokemon'>
                {reference}
            </Link>
        ))}
    </section>
)

export default FooterReferences
