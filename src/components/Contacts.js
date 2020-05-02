import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchUserContacts } from '../actions/AppActions';

class Contacts extends Component {
  componentWillMount() {
    this.props.fetchUserContacts();
  }

  render() {
    return (
      <View>
        <Text>Contatos</Text>
      </View>
    );
  }
}

export default connect(null, { fetchUserContacts })(Contacts);
