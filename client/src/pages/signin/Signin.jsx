import './signin.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {

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

            const response = await fetch('api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            setLoading(false);

            if (data.success) {
                navigate('/');
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
        <div onSubmit={handleSubmit} className='signin-wrapper'>
            <h1 className='title'>Sign In</h1>
            {
                error && <p className='err-msg'>Something went wrong!</p>
            }
            <form className="form-wrapper">
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
                        loading ? 'Signing in...' : 'Sign In'
                    }
                </button>
            </form>
            <div className="footer">
                <p>Don't have an account?</p>
                <Link to='/sign-up'>
                    <span>Sign Up</span>
                </Link>
            </div>
        </div>
    )
}

export default Signin;