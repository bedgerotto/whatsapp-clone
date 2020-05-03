import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormSignIn from './components/FormSignIn';
import Welcome from './components/Welcome';
import Main from './components/Main';
import AddContacts from './components/AddContacts';
import Chat from './components/Chat';

export default () => (
  <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
    <Scene key="formLogin" component={FormLogin} title="Login" initial hideNavBar={true} />
    <Scene key="formSignIn" component={FormSignIn} title="Cadastro" hideNavBar={false} />
    <Scene key="welcome" component={Welcome} title="Seja Bem-Vindo" hideNavBar={true} />
    <Scene key="main" component={Main} title="Principal" hideNavBar={true} />
    <Scene key="addContacts" component={AddContacts} title="Adicionar Contatos" hideNavBar={false} />
    <Scene key="chat" component={Chat} title="Conversa" hideNavBar={false} />
  </Router>
);
