import { Card, Spin, Typography } from 'antd'

import api from '../../../api'
import { useGet } from '../../../hooks/api/useGet'
import { CardPoke, PokeList, ResponsePoke } from '../../../utils/api/api.util'

import './PokeCard.css'
import Actions from './components/Actions/Actions'

export const PokeCard = ({ url }: PokeList) => {
    const { Meta } = Card
    const { Text } = Typography
    const newUrl: string = url.slice(25, url.length)
    const { data, loading } = useGet<ResponsePoke>({
        functionFetch: () => api.pokemon.pokemon(newUrl),
    })

    const objPoke: CardPoke = {
        id: data?.id,
        name: data?.name,
        sprites: data?.sprites?.other?.dream_world?.front_default,
    }

    return (
        <Spin spinning={loading}>
            <Card
                className='poke-card'
                hoverable
                cover={
                    <img
                        src={objPoke.sprites}
                        alt={objPoke.name}
                        className='img-poke'
                    />
                }
                actions={[
                    <Actions onView={() => {}} />,
                    <Actions onFavorite={() => {}} />,
                ]}
            >
                <Meta description={<Text>{objPoke.name}</Text>} />
            </Card>
        </Spin>
    )
}

export default PokeCard
