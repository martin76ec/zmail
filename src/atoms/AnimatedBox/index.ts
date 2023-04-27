import * as React from 'react'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { Theme } from '@themes/light'
import { ViewProps } from 'react-native'
import { createBox } from '@shopify/restyle'

const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View)

export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>
export default AnimatedBox
