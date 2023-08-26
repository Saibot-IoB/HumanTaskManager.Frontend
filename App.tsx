import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RouteList } from './src/routes/RouteDefinitions';
import IntroductionScreen from './src/screens/IntroductionScreen';
import WaitingScreen from './src/screens/WaitingScreen';

const Stack = createNativeStackNavigator<RouteList>();

export default function App()  {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={"IntroductionScreen"} screenOptions={{ headerBackVisible: false }}>
              <Stack.Screen 
                  name="IntroductionScreen"
                  component={IntroductionScreen}
                  options={{ 
                      title: 'Introduction'
                  }} 
              />
              <Stack.Screen 
                  name="WaitingScreen"
                  component={WaitingScreen}
                  options={{
                      title: 'Awaiting Mission'
                  }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
