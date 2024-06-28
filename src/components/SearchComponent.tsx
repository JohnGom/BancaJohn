import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

const SearchComponent = (text: string) => {
  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={'Search...'}
      placeholderTextColor={'#090909'}
    />
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  input: {
    flex: 0,
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E9E9E9',
  },
});
