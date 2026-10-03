import { Carousel } from 'antd'
import { useRef, useState } from 'react'
import type { CarouselRef } from 'antd/es/carousel'
import {
    LeftOutlined,
    PauseOutlined,
    PlayCircleOutlined,
    RightOutlined,
} from '@ant-design/icons'

import { PokePresentationView } from '../PokePresentationView'
import { PokePresentationCarouselProps } from './PokePresentationCarousel.type'

import './PokePresentationCarousel.css'

export const PokePresentationCarousel = ({
    names,
}: PokePresentationCarouselProps) => {
    const carouselRef = useRef<CarouselRef>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    if (!names.length) return null

    const canNavigate = names.length > 1

    return (
        <section
            className='feature-carousel'
            aria-label='Featured Pokémon'
            aria-roledescription='carousel'
        >
            <Carousel
                ref={carouselRef}
                adaptiveHeight
                afterChange={setActiveIndex}
                autoplay={canNavigate && !isPaused}
                autoplaySpeed={5000}
                infinite={canNavigate}
                lazyLoad='ondemand'
                pauseOnFocus
                pauseOnHover
                dots={false}
            >
                {names.map(name => (
                    <div className='feature-carousel__slide' key={name}>
                        <PokePresentationView name={name} />
                    </div>
                ))}
            </Carousel>
            {canNavigate && (
                <div className='feature-carousel__controls'>
                    <span className='feature-carousel__position' aria-live='polite'>
                        {String(activeIndex + 1).padStart(2, '0')} /{' '}
                        {String(names.length).padStart(2, '0')} ·{' '}
                        {names[activeIndex]}
                    </span>
                    <button
                        className='feature-carousel__button'
                        type='button'
                        aria-label='Previous featured Pokémon'
                        title='Previous featured Pokémon'
                        onClick={() => carouselRef.current?.prev()}
                    >
                        <LeftOutlined aria-hidden='true' />
                    </button>
                    <div
                        className='feature-carousel__dots'
                        aria-label='Choose featured Pokémon'
                    >
                        {names.map((name, index) => (
                            <button
                                className={`feature-carousel__dot${
                                    index === activeIndex ? ' is-active' : ''
                                }`}
                                key={name}
                                type='button'
                                aria-label={`Show ${name}`}
                                aria-current={
                                    index === activeIndex ? 'true' : undefined
                                }
                                onClick={() => carouselRef.current?.goTo(index)}
                            />
                        ))}
                    </div>
                    <button
                        className='feature-carousel__button'
                        type='button'
                        aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
                        title={isPaused ? 'Resume carousel' : 'Pause carousel'}
                        aria-pressed={isPaused}
                        onClick={() => setIsPaused(paused => !paused)}
                    >
                        {isPaused ? (
                            <PlayCircleOutlined aria-hidden='true' />
                        ) : (
                            <PauseOutlined aria-hidden='true' />
                        )}
                    </button>
                    <button
                        className='feature-carousel__button'
                        type='button'
                        aria-label='Next featured Pokémon'
                        title='Next featured Pokémon'
                        onClick={() => carouselRef.current?.next()}
                    >
                        <RightOutlined aria-hidden='true' />
                    </button>
                </div>
            )}
        </section>
    )
}

export default PokePresentationCarousel
