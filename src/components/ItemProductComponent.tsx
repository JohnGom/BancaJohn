import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import { Product } from '../model/product'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../router';
import { useNavigation } from '@react-navigation/native';

type Props = { product: Product}
type PropsNav = NativeStackNavigationProp<RootStackParamList>;

const ItemProductComponent = ({ product }: Props) => {
  const {navigate} = useNavigation<PropsNav>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Detail', {product})}>
      <View style={styles.contentLeft}>
        <Text style={styles.textName}>{product.name}</Text>
        <Text style={styles.textId}>ID: {product.id}</Text>
      </View>
      <View style={styles.contentRight}>
        <Image
          style={styles.imgIconRight}
          source={require('../assets/images/iconArrowRight.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemProductComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  contentLeft: {
    flex: 1,
  },
  contentRight: {
    flex: 0,
    justifyContent: 'center',
  },
  textName: {
    fontWeight: '600',
    color: '#090909',
  },
  textId: {
    marginTop: 5,
    color: '#A1A1A1',
  },
  imgIconRight: {
    width: 15,
    height: 15,
    tintColor: '#A1A1A1',
  },
});
