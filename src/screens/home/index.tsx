import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ItemProductComponent from '../../components/ItemProductComponent';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../router';
import { useProductsActions, useProductsState } from '../../context/users';
import { Products } from '../../model/product';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'> 

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [search, setSearch] = useState('')
  const [productsFiltered, setProductsFilter] = useState<Products>([])
  const {products} = useProductsState()
  const {getProducts} = useProductsActions()

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    setProductsFilter(products)
  }, [products, setProductsFilter])

  return (
    <View style={styles.container}>
      <SearchComponent value={search} onChange={setSearch}/>
      <FlatList
        style={styles.flatlist}
        data={products}
        renderItem={({item}) => <ItemProductComponent product={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.footer}>
        <ButtonComponent
          btnName="Agregar"
          btnColor={'primary'}
          handlePress={() => navigation.push('AddProduct', {})}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  flatlist: {
    flex: 0,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E9E9E9',
  },
  separator: {
    flex: 0,
    height: 2,
    backgroundColor: '#E9E9E9',
  },
  footer: {
    flex: 0,
    paddingVertical: 20,
  },
});
