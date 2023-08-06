import { useState } from 'react';
import { nanoid } from 'nanoid'
import { addUser } from 'redux/users/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const onChangeValue = e => {
    switch (e.target.name) {
      case 'name': setName(e.target.value);
        break;
      case 'age': setAge(e.target.value);
        break;
        default: return
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();

    const newUser = {
      name,
      age,
      id: nanoid(),
      status: 'offline'
    }

    dispatch(addUser(newUser));

    navigate('/');
  }

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onChangeValue} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={age} onChange={onChangeValue} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
