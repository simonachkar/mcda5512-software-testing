import { useContext } from 'react'
import PropTypes from 'prop-types';
import UserContext from '../../context';
import './Profile.css';

const Profile = ({ data }) => {
    const { loginUser } = useContext(UserContext)

    return (
        <div style={{ paddingBottom: "50px" }}>
            <button to="/logout" className="logout-button" onClick={() => loginUser(null)}>Logout</button>

            <h1>{data.first_name} {data.last_name}</h1>
            <h2>{data.email}</h2>

            <h2>MCDA5550</h2>
            <table>
                <thead>
                    <tr>
                        <td>Quiz 1</td>
                        <td>Quiz 2</td>
                        <td>Quiz 3</td>
                        <td>Final Project</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.g1a}</td>
                        <td>{data.g1b}</td>
                        <td>{data.g1c}</td>
                        <td>{data.g1d}</td>
                    </tr>
                </tbody>
            </table>

            <h2>MCDA5560</h2>
            <table>
                <thead>
                    <tr>
                        <td>Assignments</td>
                        <td>Project 1</td>
                        <td>Project 2</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.g2a}</td>
                        <td>{data.g2b}</td>
                        <td>{data.g2c}</td>
                    </tr>
                </tbody>
            </table>

            <h2>MCDA5570</h2>
            <table>
                <thead>
                    <tr>
                        <td>Project 1</td>
                        <td>Project 2</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.g3a}</td>
                        <td>{data.g3b}</td>
                    </tr>
                </tbody>
            </table>

            <h2>MCDA5580</h2>
            <table>
                <thead>
                    <tr>
                        <td>Project 1</td>
                        <td>Project 2</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.g4a}</td>
                        <td>{data.g4b}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

Profile.propTypes = {
    data: PropTypes.object.isRequired
}

Profile.defaultProps = {
    data: {
        first_name: "Simon",
        last_name: "Achkar",
        email: "admin@smu.ca",
        g1a: "61",
        g1b: "43",
        g1c: "40",
        g1d: "100",
        g2a: "100",
        g2b: "78",
        g2c: "54",
        g3a: "45",
        g3b: "86",
        g4a: "82",
        g4b: "43"
    }
}

export default Profile;
