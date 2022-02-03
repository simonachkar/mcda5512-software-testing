import { useState, useRef, useContext } from 'react'
import { Navigate } from "react-router-dom"
import axios from "axios"
import './Login.css';
import UserContext from '../context';

function Login() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const firstNameEl = useRef(null);
    const lastNameEl = useRef(null);
    const emailEl = useRef(null);
    const passwordEl = useRef(null);

    const { user, loginUser } = useContext(UserContext)

    const submitForm = () => {
        if (!firstName || firstName.length < 3) {
            firstNameEl.current.focus();
            setErrorMessage("First Name is empty or invalid")
        } else if (!lastName || lastName.length < 3) {
            lastNameEl.current.focus();
            setErrorMessage("Last Name is empty or invalid")
        } else if (!email || email.length < 3) {
            emailEl.current.focus();
            setErrorMessage("Email is empty or invalid")
        } else if ((!password || password.length < 3)) {
            passwordEl.current.focus();
            setErrorMessage("Password is empty or invalid")
        } else {
            setErrorMessage("")
            // console.log(firstName, lastName, email, password)
            const user = {
                firstName,
                lastName,
                email,
                password
            }
            axios.post('/register', {
                first_name: firstName,
                last_name: lastName,
                email,
                password
            })
                .then((res) => {
                    axios.get('/data', { params: { email: res.data.email }, headers: { 'x-access-token': res.data.token } })
                        .then((res) => loginUser(res.data))
                        .catch(err => {
                            console.log(err)
                            setErrorMessage("Fetching Data Error")
                        })

                })
                .catch(err => {
                    console.log(err)
                    setErrorMessage("Signup Error")
                })

        }
    }

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-form">
            <div id="main">
                <p>Enter your information</p>

                <div className="input-flex">
                    <div className="input-parent">
                        <label for="firstName">First Name</label>
                        <input
                            ref={firstNameEl}
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="input-parent">
                        <label for="lastName">Last Name</label>
                        <input
                            ref={lastNameEl}
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="input-parent">
                    <label for="email">Email</label>
                    <input
                        ref={emailEl}
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-parent">
                    <label for="password">Password</label>
                    <input
                        ref={passwordEl}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <p style={{ color: 'red', fontWeight: 'bold', fontSize: 'small', textAlign: 'center' }}>{errorMessage}</p>

                <button onClick={() => submitForm()}>Enter</button>
            </div>

        </div>
    );
}

export default Login;
