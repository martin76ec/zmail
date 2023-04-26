import React from 'react'
import Box from '@atoms/Box'

import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/themes/light'

const Container: React.FC<BoxProps<Theme>> = props => {
  return (
    <Box {...props} flex={1} backgroundColor="$background">
      {props.children}
    </Box>
  )
}

export default Container
