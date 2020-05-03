import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { changeMessage, sendMessage, fetchMessages } from '../actions/AppActions'; 

class Chat extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.contactEmail);
    this.handleMessages(this.props.messages);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.contactEmail !== newProps.contactEmail) {
      this.props.fetchMessages(newProps.contactEmail);
    }
    this.handleMessages(newProps.messages);
  }

  handleMessages(messages) {
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => (row1 !== row2) });

    this.dataSource = ds.cloneWithRows(messages);
  }

  rowTemplate(data) {
    if (data.type === 's') {
      return this.sendedMessageTemplate(data.message);
    }
    return this.receivedMessageTemplate(data.message);
  }

  sendedMessageTemplate(message) {
    return (
      <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
        <Text style={{ padding: 10, backgroundColor: '#DBF5D4', fontSize: 18, borderRadius: 5, elevation: 1, color: '#000' }}>{message}</Text>
      </View>
    );
  }

  receivedMessageTemplate(message) {
    return (
      <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40, borderRadius: 5 }}>
        <Text style={{ padding: 10, backgroundColor: '#F7F7F7', fontSize: 18, borderRadius: 5, elevation: 1, color: '#000' }}>{message}</Text>
      </View>
    );
  }

  _sendMessage() {
    const { message, contactName, contactEmail } = this.props;

    this.props.sendMessage(message, contactName, contactEmail);
  }

  render() {
    return (
      <View style={{ marginTop: 50, flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={message => this.rowTemplate(message)}
          />
        </View>
        <View style={{ flexDirection: 'row', height: 60 }}>
          <TextInput
            value={this.props.message}
            onChangeText={(value) => this.props.changeMessage(value)}
            style={{ flex: 4, backgroundColor: '#fff' }}
          />
          <TouchableHighlight
            onPress={() => this._sendMessage.bind(this)()}
            underlayColor="#fff"
          >
            <Image source={require('../images/enviar_mensagem.png')} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const messages = _.map(state.MessagesListReducer, (val, uid) => (
    { ...val, uid }
  ));

  return {
    messages,
    message: state.AppReducer.message,
  };
};

export default connect(mapStateToProps, { changeMessage, sendMessage, fetchMessages })(Chat);
