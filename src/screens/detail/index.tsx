import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Modal } from 'react-native';
import { RootStackParamList } from '../../router';
import ButtonComponent from '../../components/ButtonComponent';
import {useProductsActions, useProductsState} from '../../context/users';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DeviceWidth = Dimensions.get('screen').width;

const DetailScreen = ({navigation, route}: DetailScreenProps) => {
  const {product} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const {deleteProduct, getProducts} = useProductsActions()
  const {finish} = useProductsState()

  const onDeleteProduct = () => {
    setModalVisible(false)
    deleteProduct(product.id)
  }

  useEffect(() => {
    if(finish) {
      navigation.navigate('Home')
      getProducts()
    }
  }, [finish, navigation, getProducts])

  return (
    <View style={styles.container}>
      <Text style={StyleSheet.flatten([styles.textValue, styles.textTitle])}>
        ID: {product.id}
      </Text>
      <Text style={StyleSheet.flatten([styles.textLabel, styles.textSubtitle])}>
        Informacion Extra
      </Text>
      <View style={styles.body}>
        <View style={styles.field}>
          <View style={styles.contentLeft}>
            <Text style={styles.textLabel}>Nombre: </Text>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.textValue}>{product.name}</Text>
          </View>
        </View>
        <View style={styles.field}>
          <View style={styles.contentLeft}>
            <Text style={styles.textLabel}>Descripción: </Text>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.textValue}>{product.description}</Text>
          </View>
        </View>
        <View style={styles.field}>
          <View style={styles.contentLeft}>
            <Text style={styles.textLabel}>Logo: </Text>
          </View>
        </View>
        <Image
          style={styles.imgLogo}
          source={require('../../assets/images/imgCreditCard.png')}
        />
        <View style={styles.field}>
          <View style={styles.contentLeft}>
            <Text style={styles.textLabel}>Fecha liberación: </Text>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.textValue}>
              {new Date(product.date_release ?? '').toLocaleDateString(
                'en-US',
              ) ?? ''}
            </Text>
          </View>
        </View>
        <View style={styles.field}>
          <View style={styles.contentLeft}>
            <Text style={styles.textLabel}>Fecha revisión:</Text>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.textValue}>
              {new Date(product.date_revision ?? '')?.toLocaleDateString(
                'en-US',
              ) ?? ''}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComponent
          btnName="Editar"
          btnColor={'secondary'}
          handlePress={() => navigation.push('AddProduct', {product})}
        />
        <ButtonComponent
          btnName="Eliminar"
          btnColor={'destroy'}
          handlePress={() => setModalVisible(true)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Esta seguro de Eliminar el producto {product.name}?</Text>
            <ButtonComponent
              btnName="Confirmar"
              btnColor={'primary'}
              handlePress={() => onDeleteProduct()}
            />
            <ButtonComponent
              btnName="Cancelar"
              btnColor={'secondary'}
              handlePress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

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
  field: {
    flex: 0,
    flexDirection: 'row',
    padding: 10,
  },
  contentLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  contentRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textLabel: {
    fontWeight: '600',
    color: '#A1A1A1',
  },
  textValue: {
    fontWeight: '600',
    color: '#090909',
  },
  textTitle: {
    fontSize: 30,
  },
  textSubtitle: {
    fontSize: 20,
  },
  imgLogo: {
    width: DeviceWidth / 2.5,
    height: DeviceWidth / 2.5,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
