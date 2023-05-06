import Box from '@atoms/Box'
import React, { useCallback } from 'react'
import Text from '@atoms/Text'
import { Note } from '@/models'
import NoteListItemActionView from '@components/NoteListItemActionView'
import SwipeableView from '@components/SwipableView'
import TouchableOpacity from '@atoms/Touchable'

export interface ListItemProps extends Note {
  onPress: (noteId: string) => void
  onSwipeLeft?: (noteId: string, done: () => void) => void
}

const NoteListItem: React.FC<ListItemProps> = props => {
  const { onPress, onSwipeLeft, id } = props
  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])

  const handleSwipeLeft = useCallback(
    (done: () => void) => {
      onSwipeLeft && onSwipeLeft(id, done)
    },
    [id, onSwipeLeft]
  )

  const renderBackView = useCallback(
    ({ progress }) => <NoteListItemActionView progress={progress} />,
    []
  )

  return (
    <SwipeableView
      bg="$background"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
      minHeight={{
        phone: 80,
        tablet: 80
      }}
      maxHeight={{
        phone: 80,
        tablet: 80
      }}
    >
      <Box bg="$background">
        <TouchableOpacity bg="$background" px="xl" onPress={handlePress}>
          <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold">
            {props.title}
          </Text>
          <Box
            minHeight={{
              phone: 60,
              tablet: 60
            }}
            maxHeight={{
              phone: 60,
              tablet: 60
            }}
          >
            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              fontSize={14}
              opacity={0.7}
              textAlign="justify"
            >
              {props.body}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
}

export default NoteListItem
