
import React from 'react';
import { Product } from './model/product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import DetailScreen from './screens/detail';

export type RootStackParamList = {
    Home: undefined;
    Detail: {product: Product};
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  const Router = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Router;
  