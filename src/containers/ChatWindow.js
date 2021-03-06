import React from 'react';
import store from '../store';
import _ from 'lodash';
import Header from '../components/Header';
import Chats from './Chats';
import MessageInput from './MessageInput';
import './style/ChatWindow.css';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const { typing } = state;
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  return (
    <div className='ChatWindow'>
      <Header user={activeUser}/>
      <Chats messages={_.values(activeMsgs)}/>
      <MessageInput value={typing}/>
    </div>
  );
};

export default ChatWindow;
