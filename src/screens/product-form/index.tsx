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
    <View style={styles.container}>
      <View style={styles.body}>
        <InputComponent label='ID' value={ID} onChange={setID} />
        <InputComponent label='Nombre' value={name} onChange={setName} />
        <InputComponent label='Descripcion' value={description} onChange={setDescription} />
        <InputComponent label='Logo' value={logo} onChange={setLogo} />
        <InputDateComponent label='Fecha Liberacion' value={dateRelease} onChange={setDateRelease} />
        <InputDateComponent label='Fecha Revision' value={dateRevision} onChange={setDateRevision} />
      </View>
    </View>
  );
};

export default AddProductForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    paddingVertical: 20,
    marginTop: 20,
  },
  footer: {
    flex: 0,
    paddingVertical: 20,
  },
});
