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
  { id: "14324432", name: "producto 2", description: "description 2", date_release: new Date(), date_revision: new Date() },
  { id: "14324433", name: "producto 3", description: "description 3", date_release: new Date(), date_revision: new Date() },
  { id: "14324434", name: "producto 4", description: "description 4", date_release: new Date(), date_revision: new Date() },
  { id: "14324435", name: "producto 5", description: "description 5", date_release: new Date(), date_revision: new Date() },
  { id: "14324436", name: "producto 6", description: "description 6", date_release: new Date(), date_revision: new Date() },
];
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
      <SearchComponent />
      <FlatList
        style={styles.flatlist}
        data={DATA_DUMMY}
        renderItem={({item}) => <ItemProductComponent product={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.footer}>
        <ButtonComponent
          btnName="Agregar"
          btnColor={'primary'}
          handlePress={() => navigation.push('AddProduct')}
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
