import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputComponent from '../../components/InputComponent'
import InputDateComponent from '../../components/InputDateComponent'
import { useProductsActions, useProductsState } from '../../context/users';
import ButtonComponent from '../../components/ButtonComponent';
import { Product, ProductRequest } from '../../model/product';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../router';

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddProduct'
>;

const AddProductForm = ({navigation, route}: DetailScreenProps) => {
  const {product} = route.params;
  const isEdit = product !== undefined
  const [name, setName] = useState(isEdit ? product.name : '');
  const [ID, setID] = useState(isEdit ? product.id : '');
  const [description, setDescription] = useState(
    isEdit ? product.description : '',
  );
  const [logo, setLogo] = useState(isEdit ? product.logo : '');
  const [dateRelease, setDateRelease] = useState(
    product?.date_release ? new Date(product?.date_release) : new Date(),
  );
  const [dateRevision, setDateRevision] = useState(
    product?.date_revision ? new Date(product?.date_revision) : new Date(),
  );

  const {saveProduct, updateProduct, getProducts} = useProductsActions()
  const {finish} = useProductsState()

  useEffect(() => {
    if(finish) {
      navigation.navigate('Home')
      getProducts()
    }
  }, [finish, navigation, getProducts])
  
  const onSaveProduct = () => {
    const product: Product = {
      id: ID,
      name,
      description,
      logo,
      date_release: dateRelease.toISOString(),
      date_revision: dateRevision.toISOString(),
    }

    if(isEdit) {
      updateProduct(product)
    } else {
      saveProduct(product)
    }
  }

  const onRemoveInfo = () => {
    if(!isEdit) {
      setID('')
    }
    setName('')
    setDescription('')
    setLogo('')
    setDateRelease(new Date())
    setDateRevision(new Date())
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <InputComponent
          label="ID"
          value={ID}
          onChange={setID}
          editable={!isEdit}
        />
        <InputComponent label="Nombre" value={name} onChange={setName} />
        <InputComponent
          label="Descripcion"
          value={description}
          onChange={setDescription}
        />
        <InputComponent label='Logo' value={logo} onChange={setLogo} />
        <InputDateComponent
          label="Fecha Liberacion"
          value={dateRelease}
          onChange={setDateRelease}
        />
        <InputDateComponent
          label="Fecha Revision"
          value={dateRevision}
          onChange={setDateRevision}
        />
        <ButtonComponent
          btnName={isEdit ? 'Enviar' : 'Guardar'}
          btnColor={'secondary'}
          handlePress={onSaveProduct}
        />
        <ButtonComponent
          btnName="Reiniciar"
          btnColor={'destroy'}
          handlePress={onRemoveInfo}
        />
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
