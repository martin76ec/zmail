import { Note } from '@/models'
import Box from '@atoms/Box'
import Text from '@atoms/Text'
import React from 'react'

export interface ListItemProps extends Note { }

const NoteListItem: React.FC<ListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="lg">
        <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold">
          {props.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          fontSize={14}
          opacity={0.7}
        >
          {props.body}
        </Text>
      </Box>
    </Box>
  )
}

export default NoteListItem
