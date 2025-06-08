import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
  getUsers();
}, []);

const getUsers = async () => {
  const response = await axios.get('http://localhost:5000/users');
  console.log(response.data);
}

  return (
    <div className="colums mt-5 is-centered">
        <div className="colum is-half">
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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
