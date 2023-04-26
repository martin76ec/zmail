import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import light from '@themes/light'
import Navigations from './navs'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
