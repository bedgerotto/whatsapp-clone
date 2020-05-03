import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import { fetchUserContacts } from '../actions/AppActions';

class Contacts extends Component {
  componentWillMount() {
    this.props.fetchUserContacts();
    this.handleDataSource(this.props.contacts);
  }

  componentWillReceiveProps(nextProps) {
    this.handleDataSource(nextProps.contacts);
  }

  handleDataSource(contacts) {
    const dataSource = new ListView.DataSource({ rowHasChanged: (oldRow, newRow) => (oldRow !== newRow) });

    this.dataSource = dataSource.cloneWithRows(contacts);
  }

  rowTemplate(contact) {
    return (
      <TouchableHighlight
        onPress={() => (Actions.chat({
          title: contact.name, contactName: contact.name, contactEmail: contact.email
        }))}
      >
        <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
          <Text style={{ fontSize: 25 }}>{contact.name}</Text>
          <Text style={{ fontSize: 18 }}>{contact.email}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={data => this.rowTemplate(data)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const contacts = _.map(state.ContactsListReducer, (val, uid) => (
    { ...val, uid }
  ));
  return { contacts };
};

export default connect(mapStateToProps, { fetchUserContacts })(Contacts);
