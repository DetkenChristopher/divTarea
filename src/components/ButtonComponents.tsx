import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../StyleSheets.tsx/appTheme'


interface Props{
    TextButton:string
}

export const ButtonComponent = ({TextButton}:Props) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text>
           {TextButton}
        </Text>
    </TouchableOpacity>
  )
}
