import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react';

type Props = {
  btnName: string;
  btnColor: string;
  handlePress: () => void;
};

const ButtonComponent = ({btnName, btnColor, handlePress}: Props) => {
  const containerColor = {
    primary: '#FAE721',
    secondary: '#E8E3F9',
    destroy: '#E83342',
    default: '#A1A1A1',
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.container,
        {
          backgroundColor: btnColor
            ? containerColor[btnColor] : containerColor.default,
        },
      ])}
      onPress={handlePress}>
      <Text
        style={StyleSheet.flatten([
          styles.text,
          {
            color: btnColor === 'destroy' ? '#FFFFFF' : '#090909',
          },
        ])}>
        {btnName}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontWeight: '600',
    color: '#090909',
  },
});
