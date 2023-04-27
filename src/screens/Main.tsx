import React, { useCallback } from 'react'
import Container from '@atoms/Container'
import NoteList from '@components/NoteList'
import HeaderBar from '@components/HeaderBar'
import FeatherIcon from '@components/Icon'
import { TouchableOpacity } from '@atoms/Touchable'
import Text from '@atoms/Text'
import Box from '@atoms/Box'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen({ navigation }: Props) {
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList />
      <HeaderBar>
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
        <TouchableOpacity m="xs" p="xs" rippleBorderless>
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  )
}
