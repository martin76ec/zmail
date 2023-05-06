import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import Text from '@atoms/Text'
import Box from '@atoms/Box'
import BookList from '@components/BookList'

const SideBar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg" fontWeight="bold" fontSize={20}>
          Note me
        </Text>
        <Box bg="white" width="100%" height="2%" opacity={0.5} />
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default SideBar
