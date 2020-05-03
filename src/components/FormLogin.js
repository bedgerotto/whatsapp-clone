import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import {
  changeEmail,
  changePassword,
  handleSecurePassword,
  authUser
} from '../actions/AuthenticationActions';

const eyeIcon = require('../images/eye.png');
const bg = require('../images/bg.png');

class FormLogin extends Component {
  _authUser() {
    const { email, password } = this.props;

    this.props.authUser({ email, password });
  }

  renderLoginButton() {
    if (this.props.processing_login) {
      return (<ActivityIndicator size="large" />);
    }
    return (
      <Button
        title="Acessar"
        color="#115E54"
        onPress={() => this._authUser()}
      />
    );
  }

  render() {
    return (
      <Image style={styles.background} source={bg}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>WhatsApp Clone</Text>
          </View>
          <View style={styles.formContent}>
            <TextInput
              style={{ height: 45, fontSize: 20 }}
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={text => this.props.changeEmail(text)}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                secureTextEntry={this.props.securePassword}
                value={this.props.password}
                placeholder="Senha"
                placeholderTextColor="#fff"
                onChangeText={text => this.props.changePassword(text)}
              />
              <TouchableHighlight
                onPress={() => { this.props.handleSecurePassword(!this.props.securePassword); }}
              >
                <Image source={eyeIcon} style={styles.passwordIcon} />
              </TouchableHighlight>
            </View>
            <Text style={styles.loginErrorMessage}>{this.props.loginErrorMessage}</Text>
            <TouchableHighlight onPress={() => { Actions.formSignIn(); }} underlayColor="#114D44" >
              <Text style={styles.formText}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.formButton}>{ this.renderLoginButton() }</View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  loginErrorMessage: {
    color: 'red',
  },
  background: {
    flex: 1,
    width: null
  },
  container: {
    flex: 1,
    padding: 10
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
  formContent: {
    flex: 2
  },
  formText: {
    fontSize: 20,
    color: '#fff'
  },
  formButton: {
    flex: 2
  },
  passwordInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  passwordInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 45,
    fontSize: 20
  },
  passwordIcon: {
    padding: 10,
    width: 10,
    height: 10
  }
});

const mapStateToProps = state => (
  {
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    loginErrorMessage: state.AuthenticationReducer.loginErrorMessage,
    securePassword: state.AuthenticationReducer.securePassword,
    processing_login: state.AuthenticationReducer.processing_login
  }
);

export default connect(
  mapStateToProps,
  {
    changeEmail,
    changePassword,
    handleSecurePassword,
    authUser
  }
)(FormLogin);
