import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '../../redux/contact/contact-actions';
import styles from './ContactForm.module.css';
import actions from '../../redux/contact/contact-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };
  handleTest = event => {
    event.preventDefault();
    this.props.test(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={styles['from']} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              className={styles['input']}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={this.handleChange}
              required
              value={this.state.name}
            />
          </label>
          <label>
            Number:
            <input
              className={styles['input']}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              onChange={this.handleChange}
              required
              value={this.state.number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <button type="button" onClick={this.handleTest}>
          Add contact
        </button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: obj => dispatch(action.addContact(obj)),
  test: data => dispatch(actions.test(data)),
});

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ContactForm);
