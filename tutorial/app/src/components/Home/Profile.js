import Logout from './Logout';
import './Profile.css';

const Profile = ({ data }) => {
    return (
        <div style={{ paddingBottom: "50px" }}>
            <Logout />
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

export default Profile;
