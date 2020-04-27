import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

import { connect } from 'react-redux';
import { changeEmail, addContact } from '../actions/AppActions';

class AddContacts extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            style={{ fontSize: 20, height: 45 }}
            placeholder='E-mail'
            onChangeText={value => this.props.changeEmail(value)}
            value={this.props.email}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Adicionar" onPress={() => this.props.addContact(this.props.email)} color="#115E54" />
          <Text style={{ color: '#ff0000', fontSize: 20 }}>{this.props.contact_error}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.AppReducer.email,
    contact_error: state.AppReducer.contact_error
  }
);

export default connect(mapStateToProps, {
  changeEmail,
  addContact
})(AddContacts);
