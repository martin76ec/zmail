import { TouchableOpacity } from '@atoms/Touchable'
import { Theme } from '@themes/light'
import { Book } from '@/models'
import { ColorProps } from '@shopify/restyle'
import React, { useCallback } from 'react'
import Text from '@atoms/Text'

export type ListItemProps = Book &
  ColorProps<Theme> & {
    onPress: (bookId: string) => void
  }

const BookListItem: React.FC<ListItemProps> = ({
  id,
  name,
  onPress,
  color
}) => {
  const handlePress = useCallback(() => onPress(id), [id])

  return (
    <TouchableOpacity px="lg" py="sm" onPress={handlePress}>
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        mb="xs"
        color={color || '$sidebarForeground'}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default BookListItem
