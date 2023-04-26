import { Theme } from '@/themes/light'
import { Note } from '@/models'
import { FlatListProps } from 'react-native'
import { useCallback } from 'react'
import { createBox } from '@shopify/restyle'
import NoteListItem from '@components/NoteListItem'
import { NOTES } from '@fixtures'
import { FlatList } from 'react-native-gesture-handler'

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface Props { }

const NoteList: React.FC<Props> = () => {
  const renderItem = useCallback(({ item }) => {
    return <NoteListItem {...item} />
  }, [])

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
    />
  )
}

export default NoteList
