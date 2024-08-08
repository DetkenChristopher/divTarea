import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../StackNavigator';
import { screen2 } from './screen2';
import { CommonActions } from '@react-navigation/native';
import { styles } from '../StyleSheets.tsx/appTheme';
import { ButtonComponent } from '../components/ButtonComponents';


interface Props extends StackScreenProps<RootStackParams, 'screen1'> { };

export const screen1 = ({ navigation }: Props) => {
  return (
    <View>
        <Text>
        <Text style={styles.titleBody}>Bienvenido</Text>
        <Image style={styles.logo} source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fisil.pe%2Fblog%2Ftecnologia%2Ftipos-aplicaciones-moviles%2F&psig=AOvVaw1giHYYEAtSdth0H5MuC1ZB&ust=1723132951495000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDHuM2g44cDFQAAAAAdAAAAABAK'}}/>
            <TouchableOpacity style={styles.buttonText}
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'screen2' }))}>
                    <Text style={styles.buttonText} >Ir pag 2</Text>
                   
                </TouchableOpacity>
                
        </Text>
    </View>
  )
}