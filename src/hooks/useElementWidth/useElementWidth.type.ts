import { MutableRefObject } from 'react'

export type ElementWidthResult<T extends HTMLElement> = {
    ref: MutableRefObject<T | null>
    width: number
}
