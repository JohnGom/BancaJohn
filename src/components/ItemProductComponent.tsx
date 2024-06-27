import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../model/product'

type Props = { product: Product}

const ItemProductComponent = ({ product }: Props) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>ID: {product.id}</Text>
    </View>
  )
}

export default ItemProductComponent

const styles = StyleSheet.create({})