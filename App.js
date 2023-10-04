import { NavigationContainer } from '@react-navigation/native';
import LeagueScreen from './src/screens/LeagueScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriverScreen from './src/screens/DriverScreen';
import RaceScreen from './src/screens/RaceScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator initialRouteName='Leagues'>
      <Stack.Screen
        name = "Leagues"
        component = { LeagueScreen }/>
      <Stack.Screen
        name = "Drivers"
        component = { DriverScreen }/>
      <Stack.Screen
        name = "Races"
        component = { RaceScreen }/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

