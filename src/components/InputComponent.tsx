import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Product } from '../model/product'

type Props = {
  label: string;
  value: string;
  editable?: boolean;
  onChange: (text: string) => void;
}

const InputComponent = ({label, value, onChange, editable = true}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        style={styles.input}
        value={value}
        onChangeText={text => onChange(text)}
      />
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
  input: {
    flex: 0,
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E9E9E9',
  },
  label: {
    fontWeight: 'bold',
    marginVertical: 5
  },
  container: {
    marginTop: 10
  }
})