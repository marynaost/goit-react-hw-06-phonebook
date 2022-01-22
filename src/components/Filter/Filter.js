// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.scss';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={s.label}>
        Find contact by name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={value}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

export default Filter;