import { Theme } from '@/themes/light'
import RNBottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet'
import { ColorProps, useTheme } from '@shopify/restyle'
import { forwardRef } from 'react'

type Props = BottomSheetProps & ColorProps<Theme>

const BottomSheet = forwardRef<RNBottomSheet, Props>(({ ...props }, ref) => {
  const theme = useTheme<Theme>()
  const bgColor = theme.colors['$background']
  const handleColor = theme.colors['$foreground']

  return (
    <RNBottomSheet
      {...props}
      ref={ref}
      handleIndicatorStyle={{
        backgroundColor: handleColor,
        opacity: 0.8
      }}
      backgroundStyle={{
        backgroundColor: bgColor
      }}
    />
  )
})

export default BottomSheet
