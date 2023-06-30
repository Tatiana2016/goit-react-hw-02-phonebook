import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  button {
    padding: 5px 10px;
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
  }
`;

const ContactItem = styled.li`
  color: #2ecc71;
`;

const ContactNumber = styled.span`
  color: #333;
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        {name}: <ContactNumber>{number}</ContactNumber>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </ContactItem>
    ))}
  </List>
);

export default ContactList;
