import { Theme } from '@themes/light'
import Box, { BoxProps } from '@atoms/Box'
import {
  createRestyleComponent,
  createVariant,
  VariantProps
} from '@shopify/restyle'

const Bar = createRestyleComponent<
  VariantProps<Theme, 'barVariants'> & BoxProps,
  Theme
>(
  [
    createVariant({
      themeKey: 'barVariants'
    })
  ],
  Box
)

export default Bar
