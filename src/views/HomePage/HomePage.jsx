import React, { Component } from 'react';

import Main from '../../components/Main';
import Container from '../../components/Container';
import Section from '../../components/Section';

//////
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

class HomePage extends Component {
  render() {
    return (
      <>
        <Main>
          <Section title="Phonebook">
            <Container>
              <ContactForm />
            </Container>
            <Container>
              <h2>Filter</h2>
              <Container>
                <Filter />
              </Container>
              <h2>Contacts</h2>
              <ContactList></ContactList>
            </Container>
          </Section>
        </Main>
      </>
    );
  }
}

export default HomePage;
