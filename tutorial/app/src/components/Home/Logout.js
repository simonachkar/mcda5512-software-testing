import { useContext } from 'react'
import UserContext from '../../context';

const Logout = () => {
    const { loginUser } = useContext(UserContext)
    return (
        <button
            className="logout-button"
            onClick={() => {
                localStorage.removeItem('user');
                loginUser(null)
            }}
        >
            Logout
        </button>
    )
}

export default Logout;