import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Product } from './model/product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import DetailScreen from './screens/detail';
import AddProductForm from './screens/product-form';

export type RootStackParamList = {
  Home: undefined;
  Detail: {product: Product};
  AddProduct: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HeaderCustom = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.imgTitle}
        source={require('./assets/images/iconMoney.png')}
      />
      <Text style={styles.textTitle}>{'BANCO'}</Text>
    </View>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HeaderCustom />,
            headerBackTitleVisible: false,
            headerTintColor: '#003c76',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTitle: () => <HeaderCustom />,
            headerBackTitleVisible: false,
            headerTintColor: '#003c76',
          }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductForm}
          options={{
            headerTitle: () => <HeaderCustom />,
            headerBackTitleVisible: false,
            headerTintColor: '#003c76',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgTitle: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    tintColor: '#003c76',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003c76',
  },
});
