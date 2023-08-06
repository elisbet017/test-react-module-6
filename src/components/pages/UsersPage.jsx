import { useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/selectors';

export const UsersPage = () => {
  const users = useSelector(getUsers);
  // console.log(users);
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, age, status, id }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{status}</td>
            <td>
              <button type="button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
