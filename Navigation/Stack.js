import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../Screens/Home';


const Stack = createNativeStackNavigator();

export function StackNav() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={Home}/>      
      </Stack.Navigator>
      </NavigationContainer>
    );
  }