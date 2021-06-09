import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ info: { name, number, id }, onDeleteContact }) => {
  return (
    <li>
      {name} : {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
