/**
 * The main navigator.
 * This is using getComponent to load routes lazily.
 * `getComponent` + `require` loads a route only when you open it, instead
 * of loading every flow when the app starts.
 *
 * @see https://reactnavigation.org/docs/screen/#getcomponent
 */
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Config from "@/config"
import { background } from "respond-ui/foundations"

import { CHAT_ROUTES } from "./flows/chat/routes.types"
import { linking } from "./linking"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { RootStackParamList, ROUTES } from "./routes.types"
import { ErrorBoundary } from "./states"
import { TABS_ROUTES } from "./tabs/routes.types"

const exitRoutes = Config.exitRoutes

const Stack = createNativeStackNavigator<RootStackParamList, typeof ROUTES.ROUTE>()

export { navigationRef }

export function Routes() {
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme} linking={linking}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <Stack.Navigator
          id={ROUTES.ROUTE}
          screenOptions={{
            headerShown: false,
            navigationBarColor: background.white,
            contentStyle: {
              backgroundColor: background.white,
            },
          }}
        >
          <Stack.Screen
            name={TABS_ROUTES.ROUTE}
            getComponent={() => require("./tabs/routes").TabsRoutes}
          />
          <Stack.Screen
            name={CHAT_ROUTES.ROUTE}
            getComponent={() => require("./flows/chat/routes").ChatFlow}
          />
        </Stack.Navigator>
      </ErrorBoundary>
    </NavigationContainer>
  )
}
