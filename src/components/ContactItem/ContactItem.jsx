import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={s.item} key={id}>
    {name}: &nbsp;{number}
    <button className={s.deleteButton} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
