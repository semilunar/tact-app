import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const Button = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text fontSize="medium" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.BLUE_WINTHER,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontWeight: '500',
  },
});

export default Button;