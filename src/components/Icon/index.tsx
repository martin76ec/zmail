import * as React from 'react'
import { Feather } from '@expo/vector-icons'
import { ColorProps, useResponsiveProp } from '@shopify/restyle'
import { Theme } from '@themes/light'
import { useTheme } from '@shopify/restyle'

export type IconProps = React.ComponentProps<typeof Feather>
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: React.FC<Props> = ({ color = '$foreground', ...props }) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']
  return <Feather {...props} color={vColor} />
}

export default FeatherIcon
