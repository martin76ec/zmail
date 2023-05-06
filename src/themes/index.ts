import light, { Theme } from './light'
import dark from './dark'
import nord from './nord'
import solarizedDark from './solarizedDark'

export type ThemeNames = 'light' | 'dark' | 'nord' | 'solarizedDark'
export interface ThemeMeta {
  id: ThemeNames
  name: string
  theme: Theme
}

export const themes: readonly ThemeMeta[] = [
  {
    id: 'light',
    name: 'Light',
    theme: light
  },
  {
    id: 'dark',
    name: 'Dark',
    theme: dark
  },
  {
    id: 'nord',
    name: 'Nord',
    theme: nord
  },
  {
    id: 'solarizedDark',
    name: 'Solarized Dark',
    theme: solarizedDark
  }
]

export type { Theme }
