import { createStackNavigator } from '@react-navigation/stack';
import { screen1 } from './screens/screen1';
import { screen2 } from './screens/screen2';

export type RootStackParams = {
    screen1: undefined,
    screen2: undefined,
    
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator =()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="screen1" component={screen1} />
      <Stack.Screen name="screen2" component={screen2} />
      
    </Stack.Navigator>
  );
}