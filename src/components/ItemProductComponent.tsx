import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../model/product'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../router';
import { useNavigation } from '@react-navigation/native';

type Props = { product: Product}
type PropsNav = NativeStackNavigationProp<RootStackParamList>;

const ItemProductComponent = ({ product }: Props) => {
  const {navigate} = useNavigation<PropsNav>();
  return (
    <TouchableOpacity onPress={() => navigate('Detail', {product})}>
      <Text>{product.name}</Text>
      <Text>ID: {product.id}</Text>
    </TouchableOpacity>
  )
}

export default ItemProductComponent

const styles = StyleSheet.create({})