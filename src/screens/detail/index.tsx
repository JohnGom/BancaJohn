import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../router';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DetailScreen = ({route}: DetailScreenProps) => {
  const { product } = route.params
  return (
    <View style={styles.container}>
      <Text>ID: {product.id}</Text>
      <Text>Informacion Extra</Text>
      <Text>Nombre: {product.name}</Text>
      <Text>Descripcion: {product.description}</Text>
      <Text>Logo: {product.logo}</Text>
      <Text>Fecna liberacion: {product.date_release?.toLocaleDateString ?? ""}</Text>
      <Text>Fecna revision: {product.date_revision?.toLocaleDateString ?? ""}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {}
});
