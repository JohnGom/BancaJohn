import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'

type Props = {
    label: string,
    value: Date,
    onChange: (date: Date) => void 
}

const InputDateComponent = ({ label, value, onChange }: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    <DatePicker
        date={value}
        onDateChange={val => onChange(val)}
        style={styles.dateInput}
    />
    </View>
  )
}

export default InputDateComponent

const styles = StyleSheet.create({
  dateInput: {
    flex: 0,
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
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