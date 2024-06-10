import './signup.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            setError(false);

            const response = await fetch('api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            setLoading(false);

            if (data.success) {
                navigate('/sign-in');
                return
            }

            if (!data.success) {
                setError(true);
                return
            }
        } catch (err) {
            setLoading(false);
            setError(true)
        }
    }

    return (
        <div onSubmit={handleSubmit} className='signup-wrapper'>
            <h1 className='title'>Sign Up</h1>
            {
                error && <p className='err-msg'>Something went wrong!</p>
            }
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
                <button disabled={loading}>
                    {
                        loading ? 'Signing up...' : 'Sign Up'
                    }
                </button>
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