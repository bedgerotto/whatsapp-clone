import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const bg = require('../images/bg.png');
const logo = require('../images/logo.png');

export default () => (
  <Image style={styles.backgound} source={bg} >
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Seja Bem-Vindo</Text>
        <Image source={logo} />
      </View>
      <View style={styles.footer}>
        <Button color="#115E54" title="Fazer Login" onPress={() => Actions.formLogin()} />
      </View>
    </View>
  </Image>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  footer: {
    flex: 1
  },
  backgound: {
    flex: 1,
    width: null
  }
});
