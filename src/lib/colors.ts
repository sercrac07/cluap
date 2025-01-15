import { COLORS } from './constants'
import { toCamelCase, ToCamelCase } from './utils'

export const color = Object.keys(COLORS).reduce((acc, key) => {
  acc[toCamelCase(key.toLowerCase()) as ToCamelCase<Lowercase<keyof typeof COLORS>>] = (text: string) => `${COLORS[key as keyof typeof COLORS]}${text}${COLORS.RESET}`
  return acc
}, {} as Record<ToCamelCase<Lowercase<keyof typeof COLORS>>, (text: string) => string>)
