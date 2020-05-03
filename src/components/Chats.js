import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import { fetchChats } from '../actions/AppActions';

class Chats extends Component {
  componentWillMount() {
    this.props.fetchChats();
    this.handleChats(this.props.chats);
  }

  componentWillReceiveProps(newProps) {
    this.handleChats(newProps.chats);
  }

  rowTemplate(chat) {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => (Actions.chat({
          title: chat.name, contactName: chat.name, contactEmail: chat.email
        }))}
      >
        <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#CCC', padding: 10 }}>
          <Text style={{ fontSize: 25, color: '#000' }}>{chat.name}</Text>
          <Text style={{ fontSize: 12, color: '#000' }}>{chat.email}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  handleChats(chats) {
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => (row1 !== row2) });

    this.dataSource = ds.cloneWithRows(chats);
  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.rowTemplate}
        />
      </View>
    );
  }
};

const mapStateToProps = state => {
  const chats = _.map(state.ChatsListReducer, (val, uid) => (
    { ...val, uid }
  ));

  return { chats };
};

export default connect(mapStateToProps, { fetchChats })(Chats);
