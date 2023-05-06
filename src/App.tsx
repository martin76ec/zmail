import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import Navigations from './navs'
import 'react-native-gesture-handler'
import StatusBar from '@components/StatusBar'
import { useAtom } from 'jotai'
import { activeThemeAtom } from './states/theme'

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
