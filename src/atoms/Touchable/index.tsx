import Pressable, { PressableProps } from '@atoms/Pressable'
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  ResponsiveValue,
  useResponsiveProp,
  useRestyle,
  useTheme
} from '@shopify/restyle'
import { Theme } from '@/themes/light'
import { Platform } from 'react-native'

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity
])

interface Props extends PressableProps {
  pressed?: RestyleProps
  rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>
  rippleBorderless?: boolean
}

const Touchable = ({
  pressed,
  rippleColor,
  rippleBorderless,
  style,
  ...props
}: Props) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined }
  const theme = useTheme<Theme>()
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor)
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp]

  return (
    <Pressable
      {...props}
      android_ripple={{ color: rippleColorValue, borderless: rippleBorderless }}
      // @ts-ignore
      style={(pressed: isPressed) => (pressed ? [style, pressedStyle] : style)}
    />
  )
}

export const TouchableOpacity: React.FC<Props> = props => {
  return (
    <Touchable
      rippleColor="$foreground"
      {...props}
      pressed={{
        opacity: Platform.select({
          ios: 0.6
        })
      }}
    />
  )
}

export default Touchable
