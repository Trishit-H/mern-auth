import './signup.css';

import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='signup-wrapper'>
            <h1 className='title'>Sign Up</h1>
            <form className="form-wrapper">
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
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