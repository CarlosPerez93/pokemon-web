import { ReactElement } from 'react'

export type StepType = { component: ReactElement; key: number; title?: string }

export type StepReturnType = {
    next: () => void
    previous: () => void
    resetSteps: () => void
    isFirstStep: boolean
    isLastStep: boolean
    currentStep: number
    content: ReactElement
}
