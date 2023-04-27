import React from 'react'
import Container from '@atoms/Container'
import NoteList from '@components/NoteList'
import HeaderBar from '@components/HeaderBar'
import FeatherIcon from '@components/Icon'

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
      <HeaderBar>
        <FeatherIcon name="menu" size={22} />
        <FeatherIcon name="more-vertical" size={22} />
      </HeaderBar>
    </Container>
  )
}
