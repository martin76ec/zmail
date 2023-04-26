import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Text from '@atoms/Text'
import Box from '@atoms/Box'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          Inkdrop
        </Text>
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
