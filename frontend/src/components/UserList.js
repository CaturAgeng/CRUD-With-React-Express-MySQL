import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';  

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
  getUsers();
}, []);

const getUsers = async () => {
  const response = await axios.get('http://localhost:5000/users');
  setUsers(response.data);
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers(); // Refresh the user list after deletion
  } catch (error) {
    console.error('There was an error deleting the user!', error);
  }
}

  return (
    <div className="colums mt-5 is-centered">
        <div className="colum is-half">
            <Link to={`add`} className='button is-success'>
              Add New
            </Link>
            <table className='table is-striped is-fullwidth'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <Link to={`edit/${user.id}`} className='button is-small is-info'>Edit</Link>
                      <button onClick={()=> deleteUser(user.id)} className='button is-small is-danger ml-2'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
