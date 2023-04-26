import React from 'react'
import Text from '@atoms/Text'
import Container from '@atoms/Container'
import NoteList from '@components/NoteList'

const viewStyles = {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function MainScreen() {
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
    </Container>
  )
}
