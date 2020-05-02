import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

import { connect } from 'react-redux';
import { changeEmail, addContact } from '../actions/AppActions';

class AddContacts extends Component {
  handleAddSuccessContact() {
    if (this.props.addContactSuccess) {
      return (
        <View>
          <Text style={{ fontSize: 20 }}>Contato adicionado com sucesso!</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            style={{ fontSize: 20, height: 45 }}
            placeholder='E-mail'
            onChangeText={value => this.props.changeEmail(value)}
            value={this.props.contactEmail}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Adicionar" onPress={() => this.props.addContact(this.props.contactEmail)} color="#115E54" />
          <Text style={{ color: '#ff0000', fontSize: 20 }}>{this.props.contactError}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        { this.handleAddSuccessContact() }
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    contactEmail: state.AppReducer.contactEmail,
    contactError: state.AppReducer.contactError,
    addContactSuccess: state.AppReducer.addContactSuccess
  }
);

export default connect(mapStateToProps, {
  changeEmail,
  addContact
})(AddContacts);
