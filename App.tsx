import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native';
import { StackNavigator } from './src/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';



export const App = () => {
  return (
    <NavigationContainer>
<StackNavigator/>
    </NavigationContainer>
      
    
      
  )
}

export default App;
