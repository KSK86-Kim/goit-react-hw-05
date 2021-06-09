import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contact/contact-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={styles['filter__label']}>
        Find contacts by Name
        <br />
        <input
          className={styles['filter__input']}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
