import { Component } from 'react';
import css from "./App.module.css";

import ContactList from "./contactList/ContactList";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";

class App extends Component
{
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  onChengeFilter = e => this.setState({ filter: e.currentTarget.value});
  getVisibleContactList() {
    const normolizeFilterValue = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normolizeFilterValue));
  };

  deletContact = contactId => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))}


  contactFormSubmitHandler = newContact => this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact]
  }));
  
  componentDidMount() {
    const localStorageContacts = localStorage.getItem("contacts");
    const localStorageContactsPars = JSON.parse(localStorageContacts)
    console.log(localStorageContactsPars);
    if (localStorageContactsPars) {
      this.setState({ contacts: localStorageContactsPars })
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  render() {

    return (
      <div className={css.app_container}>
        <h1>Phonebook</h1>
        <ContactForm onContactFormSubmitHandler={this.contactFormSubmitHandler} contacts={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChengeFilter} />
        
        <ContactList contacts={this.getVisibleContactList()} onDeleteContact={this.deletContact} />
      </div>
    )
  }
  }

export default App;