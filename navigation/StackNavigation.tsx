import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'

export type RootStackParamList = {
  HomeScreen: undefined
  MapScreen: undefined
  EatsScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='HomeScreen'
        component={HomeScreen}
      />
      <Stack.Screen name='MapScreen' component={MapScreen} />
    </Stack.Navigator>
  )
}
