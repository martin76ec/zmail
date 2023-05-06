import { Theme } from '@/themes/light'
import { Note } from '@/models'
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import { useCallback } from 'react'
import { createBox } from '@shopify/restyle'
import NoteListItem from '@components/NoteListItem'
import { NOTES } from '@fixtures'
import Animated, { AnimateProps } from 'react-native-reanimated'
import Box from '@atoms/Box'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
)

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (noteId: string) => void
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void
}

const NoteList: React.FC<Props> = ({
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft,
  onScroll
}) => {
  const renderItem = useCallback(({ item }) => {
    return (
      <NoteListItem
        {...item}
        onPress={onItemPress}
        onSwipeLeft={onItemSwipeLeft}
      />
    )
  }, [])

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  )
}

export default NoteList
