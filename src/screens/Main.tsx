import Box from '@atoms/Box'
import Container from '@atoms/Container'
import FeatherIcon from '@components/Icon'
import HeaderBar from '@components/HeaderBar'
import MoveNoteSheet from '@components/MoveNoteSheet'
import NoteList from '@components/NoteList'
import React, { useCallback, useRef, useState } from 'react'
import Text from '@atoms/Text'
import useStickyHeader from '@hooks/useStickyHeader'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TouchableOpacity } from '@atoms/Touchable'
import ThemePicker from '@components/ThemePicker'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen({ navigation }: Props) {
  const refThemePicker = useRef<ThemePicker>(null)
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader()
  const [concealNoteListItem, setConcealNoteListItem] = useState<
    (() => void) | null
  >(null)
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])
  const handleMenuToggle = useCallback(() => {
    const { current: menu } = refThemePicker
    menu && menu.show()
  }, [])
  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate('Detail', {
      noteId
    })
  }, [])

  const handleNoteListSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet
      if (menu) menu.show()
      setConcealNoteListItem(() => conceal)
    },
    []
  )

  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem()
    setConcealNoteListItem(null)
  }, [concealNoteListItem])

  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListSwipeLeft}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleSidebarToggle}
        >
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Text fontWeight="bold">All Notes</Text>
        </Box>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleMenuToggle}
        >
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
      <ThemePicker ref={refThemePicker} />
    </Container>
  )
}
