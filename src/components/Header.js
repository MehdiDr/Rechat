import React from 'react';
import './style/Header.css';

function Header({ user }) {
  const { name, status, profile_pic } = user;
  return (
    <header className='Header'>
      <h1 className='Header__name'>{name}</h1>
      <img className='User__pic' src={profile_pic} alt={name}/>
      <p className='Header__status'>{status}</p>
    </header>
  );
}

export default Header;
