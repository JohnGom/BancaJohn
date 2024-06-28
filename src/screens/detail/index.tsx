import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, } from 'react-native';
import { RootStackParamList } from '../../router';
import ButtonComponent from '../../components/ButtonComponent';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DeviceWidth = Dimensions.get('screen').width;

const DetailScreen = ({navigation, route}: DetailScreenProps) => {
  const {product} = route.params;
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
              {product.date_release?.toLocaleDateString ?? ""}
            </Text>
          </View>
        </View>
        <View style={styles.field}>
          <View style={styles.contentLeft}>
            <Text style={styles.textLabel}>Fecha revisión:</Text>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.textValue}>
              {product.date_revision?.toLocaleDateString ?? ""}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComponent
          btnName="Editar"
          btnColor={'secondary'}
          handlePress={() => navigation.goBack()}
        />
        <ButtonComponent
          btnName="Eliminar"
          btnColor={'destroy'}
          handlePress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

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
});
