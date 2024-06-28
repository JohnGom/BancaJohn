import React, {useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { Products } from '../../model/product';
import ItemProductComponent from '../../components/ItemProductComponent';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../router';
import { useProductsActions, useProductsState } from '../../context/users';

const DATA_DUMMY: Products = [
    { id: "12321431", name: "producto 1", description: "description 1", date_release: new Date(), date_revision: new Date() },
    { id: "1432443", name: "producto 2", description: "description 2", date_release: new Date(), date_revision: new Date() }
]

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'> 

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {products} = useProductsState()
  const {getProducts} = useProductsActions()

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <View style={styles.container}>
        <Text>Banco</Text>
      <SearchComponent />
      <FlatList 
        data={DATA_DUMMY}
        renderItem={({item}) => <ItemProductComponent product={item} />}
        keyExtractor={(item) => item.id}
        />
      <ButtonComponent btnName="Agregar" handlePress={() => navigation.push("AddProduct")}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
