import React from 'react';
import { TextInput,TextInputProps } from 'react-native';
import { styles } from '../StyleSheets.tsx/appTheme';

interface InputFieldProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.inputfield}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

export default InputField;