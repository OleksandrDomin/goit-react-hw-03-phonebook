import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

class ContactForm extends Component {
state = {
    name: '',
    number: ''
  }

 handleInputChahge = (e)=> {
    const { name, value } = e.currentTarget;
     this.setState({ [name]: value });
    };
    
     resetForm =()=> 
     this.setState({
         name: '',
         number: ''
     });
   
    handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
      };
      
      const normolizeNewContact = newContact.name.toLowerCase();
    
const contactExists = this.props.contacts.some(
    (contact) => contact.name.toLowerCase() === normolizeNewContact);

  if (contactExists) {
    alert(`${newContact.name} is already in contacts.`);
    this.resetForm();
  } else {
    this.props.onContactFormSubmitHandler(newContact);
    this.resetForm();
  }};

    render()
    {
        return (
            <>
               <form onSubmit={this.handleSubmit}  className={css.contactList_container}>
              <div className={css.input_container}>
                <div className={css.lable_box}>
                  <label htmlFor='name' className={css.lable}>Name</label>
                </div>
              <input type="text" className={css.input}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only  letters, spaces, hyphens, and apostrophes are allowed"
                value={this.state.name}
                onChange={this.handleInputChahge}
                required
                />
          </div>
          
          <div className={css.input_container}>
                <div className={css.lable_box}> 
                <label htmlFor="number" className={css.lable}>Number</label>
                </div>
              <input type="tel" className={css.input}
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
                value={this.state.number}
                onChange={this.handleInputChahge}
                required
              />
          </div>

          <button type="submit" className={css.button}>Add contact</button>
        </form> 
            </>
        )
    }
};

ContactForm.protoType = {
  contacts: PropTypes.array.isRequired,
  onContactFormSubmitHandler: PropTypes.func.isRequired
};

export default ContactForm;