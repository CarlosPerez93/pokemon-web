import {
    HeartFilled,
    FireOutlined,
    HeartOutlined,
    AudioOutlined,
    SoundOutlined,
    RadarChartOutlined,
} from '@ant-design/icons'

import { ButtonsGroupProps } from './ButtonsGroup.type'

export const ButtonsGroup = ({
    isFavorite,
    name,
    hasCry,
    isCryPlaying,
    onPlayCry,
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
        label: isCryPlaying ? 'Playing cry...' : 'Cry Audio',
        icon: isCryPlaying ? <SoundOutlined /> : <AudioOutlined />,
        action: onPlayCry,
        disabled: !hasCry,
    },
    {
        label: 'Thermal Scan',
        icon: <RadarChartOutlined />,
        action: () => console.log('Thermal Scan clicked'),
    },
]

export default ButtonsGroup
