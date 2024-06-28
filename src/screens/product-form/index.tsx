import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputComponent from '../../components/InputComponent'
import DatePicker from 'react-native-date-picker'
import InputDateComponent from '../../components/InputDateComponent'

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [dateRelease, setDateRelease] = useState(new Date());
  const [dateRevision, setDateRevision] = useState(new Date());
  //const {saveUser, getUsers} = useUsersActions();
  //const {saved} = useUsersState();
  return (
    <View>
      <InputComponent label='ID' value={ID} onChange={setID} />
      <InputComponent label='Nombre' value={name} onChange={setName} />
      <InputComponent label='Descripcion' value={description} onChange={setDescription} />
      <InputComponent label='Logo' value={logo} onChange={setLogo} />
      <InputDateComponent label='Fecha Liberacion' value={dateRelease} onChange={setDateRelease} />
      <InputDateComponent label='Fecha Revision' value={dateRevision} onChange={setDateRevision} />
    </View>
  )
}

export default AddProductForm

const styles = StyleSheet.create({})