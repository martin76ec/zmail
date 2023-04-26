import {
  createDrawerNavigator,
  DrawerContentComponentProps
} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '@screens/Main'
import * as React from 'react'
import Sidebar from '@components/Sidebar'
import { NavigatorScreenParams } from '@react-navigation/native'

export type HomeDrawerParamList = { Main: {} }

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Detail: {
    noteId: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

interface NavigatorWrapperInterface {
  children: JSX.Element
  initialRouteName: 'Main'
  drawerContent: (props: any) => React.FC<DrawerContentComponentProps>
}

function NavigatorWrapper({
  children,
  initialRouteName,
  drawerContent
}: NavigatorWrapperInterface) {
  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200
      }}
      drawerContent={drawerContent}
    >
      {children}
    </Drawer.Navigator>
  )
}

function Home() {
  return (
    <NavigatorWrapper
      initialRouteName="Main"
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </NavigatorWrapper>
  )
}

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}
