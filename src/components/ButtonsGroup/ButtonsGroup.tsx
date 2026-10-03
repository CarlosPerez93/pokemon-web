import {
    HeartFilled,
    FireOutlined,
    HeartOutlined,
    AudioOutlined,
    RadarChartOutlined,
} from '@ant-design/icons'
import { ButtonsGroupProps } from './ButtonsGroup.type'

export const ButtonsGroup = ({
    isFavorite,
    name,
    onToggleFavorite,
}: ButtonsGroupProps) => [
    {
        label: isFavorite ? 'Saved to archive' : 'Save specimen',
        icon: isFavorite ? <HeartFilled /> : <HeartOutlined />,
        action: () => onToggleFavorite(name),
    },
    {
        label: 'Standard Biology',
        icon: <FireOutlined />,
        action: () => console.log('Standard Biology clicked'),
    },
    {
        label: 'Shiny Variant',
        icon: <HeartOutlined />,
        action: () => console.log('Shiny Variant clicked'),
    },
    {
        label: 'Cry Audio',
        icon: <AudioOutlined />,
        action: () => console.log('Cry Audio clicked'),
    },
    {
        label: 'Thermal Scan',
        icon: <RadarChartOutlined />,
        action: () => console.log('Thermal Scan clicked'),
    },
]

export default ButtonsGroup
