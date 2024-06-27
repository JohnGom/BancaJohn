import * as React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { Products } from '../../model/product';
import ItemProductComponent from '../../components/ItemProductComponent';

const DATA_DUMMY: Products = [
    { id: "12321431", name: "producto 1", description: "description 1", date_release: new Date(), date_revision: new Date() },
    { id: "1432443", name: "producto 2", description: "description 2", date_release: new Date(), date_revision: new Date() }
]

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
        <Text>Banco</Text>
      <SearchComponent />
      <FlatList 
        data={DATA_DUMMY}
        renderItem={({item}) => <ItemProductComponent product={item} />}
        keyExtractor={(item) => item.id}
        />
      <ButtonComponent />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
