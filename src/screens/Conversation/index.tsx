import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Conversation = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Conversation Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    height: '100%',
  },
  text: {
    fontSize: 32,
  },
});

export default Conversation;
