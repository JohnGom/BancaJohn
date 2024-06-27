import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DetailScreenProps {}

const DetailScreen = (props: DetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {}
});
