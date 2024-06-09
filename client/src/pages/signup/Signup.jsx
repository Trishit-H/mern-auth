import './signup.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className='signup-wrapper'>
            <h1 className='title'>Sign Up</h1>
            <form className="form-wrapper">
                <input
                    type="text"
                    placeholder='Username'
                    name='username'
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
            <div className="footer">
                <p>Have an account?</p>
                <Link to='/sign-in'>
                    <span>Sign In</span>
                </Link>
            </div>
        </div>
    )
}

export default Signup;