import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                password
            });
            navigate('/'); // Redirect to the home page after saving
            // setName('');
            // setEmail('');
            // setPassword('');
            // alert('User added successfully');
        } catch (error) {
            console.error('There was an error saving the user!', error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            value={name} 
                            onChange={(e)=> setName(e.target.value)} 
                            placeholder='Name' 
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Email</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            placeholder='Email' 
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <div className="control">
                        <input 
                            type="password" 
                            className="input" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)} 
                            placeholder='Password' 
                        />
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className="button is-success">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser
