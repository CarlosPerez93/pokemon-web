import Search from '../../../components/Search'
import Pokemons from '../../../components/Pokemons'
import NavBar from '../../../components/NavBar/NavBar'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <Search />
            <Pokemons />
        </div>
    )
}

export default Home
