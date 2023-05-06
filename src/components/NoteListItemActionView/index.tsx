import AnimatedBox from '@atoms/AnimatedBox'
import Box from '@atoms/Box'
import React from 'react'
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import FeatherIcon from '@components/Icon'
import Text from '@atoms/Text'

interface Props {
  progress: Readonly<SharedValue<number>>
}

const NoteListItemActionView: React.FC<Props> = ({ progress }) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: progress.value
      }
    ]
  }))

  return (
    <Box
      bg="$primary"
      py="lg"
      minHeight={{
        phone: 80,
        tablet: 80
      }}
      maxHeight={{
        phone: 80,
        tablet: 80
      }}
    >
      <AnimatedBox
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        px="lg"
        style={iconStyle}
      >
        <FeatherIcon name="folder" color="$background" size={18} />
        <FeatherIcon name="arrow-right" color="$background" size={18} />
      </AnimatedBox>
    </Box>
  )
}

export default NoteListItemActionView
