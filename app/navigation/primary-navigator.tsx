/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import {
  WelcomeScreen,
  DemoScreen,
  Overview,
  ProjectUpdates,
  Inquiries,
  UnitDetails,
} from "../screens"

import BottomTab from "./BottomTab/BottomTab"
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  welcome: undefined
  demo: undefined
  BottomTab: undefined
  Overview: undefined
  ProjectUpdates: undefined
  Inquiries: undefined
  UnitDetails: undefined
}

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
      {/* <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="ProjectUpdates" component={ProjectUpdates} />
      <Stack.Screen name="Inquiries" component={Inquiries} />
      <Stack.Screen name="UnitDetails" component={UnitDetails} /> */}
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["BottomTab"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
