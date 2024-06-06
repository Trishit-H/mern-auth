import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className='wrapper'>
            <div className="navbar">
                <Link to='/'>
                    <h1 className="logo">TH APP</h1>
                </Link>
                <ul className="nav-items">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header