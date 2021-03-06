import React from 'react';
import './style/Sidebar.css';
import User from '../containers/User';

const Sidebar = ({ contacts }) => (
  <aside className="Sidebar">{contacts.map(contact => <User user={contact} key={contact.user_id} />)}</aside>
);

export default Sidebar;
