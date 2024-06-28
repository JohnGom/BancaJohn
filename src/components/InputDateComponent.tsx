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
    <View>
        <Text>{label}</Text>
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
        height: 30,
        borderColor: "gray",
        borderWidth: 1,
    }
})