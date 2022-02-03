import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Home.css';
import Toggle from './Toggle';
import UserContext from '../../context';
import Profile from './Profile';

const Home = () => {
    const [isDark, toggleDark] = useState(true)
    const { user, loginUser } = useContext(UserContext)

    // Check if localStorage has an object called 'user', than login that user in the 
    useEffect(() => {
        if (localStorage.getItem('user')) loginUser(JSON.parse(localStorage.getItem('user')))
    }, [loginUser])

    return (
        <div className={isDark ? "app-dark" : "app-light"}>
            {user ?
                <Profile data={user} />
                :
                <>
                    <Toggle onClick={() => toggleDark(!isDark)} />
                    <img src={logo} className="App-logo" alt="logo" width={300} />

                    <h3>
                        Welcome <code>student</code>.
                        <p>Login to see your grades.</p>
                    </h3>

                    {user ?
                        <button to="/logout" className="logout-button" onClick={() => loginUser(null)}>Logout</button> :
                        <button className="login-button">
                            <Link to="/login">Login</Link>
                        </button>
                    }
                </>
            }
        </div>
    );
}

export default Home;
