import PropTypes from "prop-types";
import css from "./ContactList.module.css";



function ContactList({ contacts, onDeleteContact }) {
   
   
    return (
        <div >
            {contacts.length> 0 ? ( <ul className={css.contactList_list}>
                {contacts.map(contact =>  
                    <li className={css.contactList_item}  key={contact.id}> <span >{contact.name}:{contact.number}</span>
                    <button className={css.button} onClick={()=> onDeleteContact(contact.id)}>Delete</button>
                </li>                
         )}
        </ul>): (<h3>You have No contacts, please enter contacts.....</h3>)}
        </div>
    )
};

ContactList.protoType = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;