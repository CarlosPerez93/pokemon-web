import { GenderRate } from './formatGenderRate.type'

export const formatGenderRate = (rate: GenderRate) => {
    if (rate === undefined || rate < 0) return 'Genderless'
    const femalePercent = Math.round((rate / 8) * 100)
    return `${100 - femalePercent}% ♂ · ${femalePercent}% ♀`
}
