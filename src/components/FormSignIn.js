import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Image, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
  changeEmail,
  changePassword,
  changeName,
  storeUser
} from '../actions/AuthenticationActions';

const bg = require('../images/bg.png');

class FormSignIn extends Component {
  _storeUser() {
    const { name, email, password } = this.props;
    this.props.storeUser({ name, email, password });
  }

  renderSigninButton() {
    if (this.props.processing_signin) {
      return (<ActivityIndicator size="large" />);
    }
    return (
      <Button title="Cadastrar" color="#115E54" onPress={() => this._storeUser()} />
    );
  }

  render() {
    return (
      <Image style={styles.backgound} source={bg} >
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <TextInput
              value={this.props.name}
              style={styles.formInput}
              placeholder="Nome"
              placeholderTextColor="#fff"
              onChangeText={text => this.props.changeName(text)}
            />
            <TextInput
              value={this.props.email}
              style={styles.formInput}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={text => this.props.changeEmail(text)}
            />
            <TextInput
              secureTextEntry
              value={this.props.password}
              style={styles.formInput}
              placeholderTextColor="#fff"
              placeholder="Senha"
              onChangeText={text => this.props.changePassword(text)}
            />
          </View>
          <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
          <View style={styles.buttonContainer}>{this.renderSigninButton()}</View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  backgound: {
    flex: 1,
    width: null
  },
  container: {
    flex: 1,
    padding: 10
  },
  formContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  formInput: {
    fontSize: 20,
    height: 45
  },
  buttonContainer: {
    flex: 1
  }
});

const mapStatesToProps = state => (
  {
    name: state.AuthenticationReducer.name,
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    errorMessage: state.AuthenticationReducer.errorMessage,
    processing_signin: state.AuthenticationReducer.processing_signin
  }
);

export default connect(
  mapStatesToProps,
  { changeEmail, changeName, changePassword, storeUser }
)(FormSignIn);
