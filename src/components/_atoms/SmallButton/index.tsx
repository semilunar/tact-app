import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const SmallButton = ({ text }: any) => {
  return (
    <Text fontSize="small" style={styles.text}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.SOFT_BLACK,
    opacity: 0.35,
    fontFamily: 'TTCommons-Medium',
  },
});

export default SmallButton;
