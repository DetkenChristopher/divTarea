import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { styles } from '../StyleSheets.tsx/appTheme'
import { ImputComponent } from '../components/imputComponents'
import { ButtonComponent } from '../components/ButtonComponents'
import InputField from '../components/inputfield'



export const screen2 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');


const handleDivide = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Por favor ingrese números válidos');
    } else if (number1 === 0 && number2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (number2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult(`Resultado: ${number1 / number2}`);
    }

  };
  return (
<View>
    <View style={styles.ContentBody}>
    <Text style={styles.DescriptionBody}></Text>
    <InputField
        style={styles.input}
        placeholder='numero 1'
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}/>
    <InputField
        style={styles.input}
        keyboardType="numeric"
        placeholder='numero 2'
        value={num2}
        onChangeText={setNum2}
      />
    </View>
    <Button title='Dividir' onPress={handleDivide} />
    {result !== '' && <Text style={styles.result}>{result}</Text>}
       
    </View>
  )
}
