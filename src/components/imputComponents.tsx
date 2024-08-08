import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../StyleSheets.tsx/appTheme';
import { IMPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../common/constantColors";


interface Props{
    placeholder:string
    handleSetValues:(num1:'',num2:'')=>void

}
export const ImputComponent = ({placeholder}:Props) => {
  return (
              <TextInput
              placeholder={placeholder}
              keyboardType='number-pad'
              style={styles.imputText}/>
              
  );
}
