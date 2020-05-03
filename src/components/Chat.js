import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';

import { changeMessage } from '../actions/AppActions'; 

class Chat extends Component {
  render() {
    return (
      <View style={{ marginTop: 50, flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <Text>Conversa</Text>
        </View>
        <View style={{ flexDirection: 'row', height: 60 }}>
          <TextInput
            value={this.props.message}
            onChangeText={(value) => this.props.changeMessage(value)}
            style={{ flex: 4, backgroundColor: '#fff' }}
          />
          <TouchableHighlight
            onPress={() => false}
            underlayColor="#fff"
          >
            <Image source={require('../images/enviar_mensagem.png')} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    message: state.AppReducer.message
  }
);

export default connect(mapStateToProps, { changeMessage })(Chat);
