import React from 'react';
import { setActiveUserId } from '../actions';
import store from '../store';
import './style/User.css';

const User = ({ user }) => {
  const { name, profile_pic } = user;
  return (
    <div className='User' onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className='User__pic' />
      <div className='User__details'>
        <p className='User__details-name'>{name}</p>
      </div>
    </div>
  );
};
const handleUserClick = ({ user_id }) => store.dispatch(setActiveUserId(user_id));

export default User;
