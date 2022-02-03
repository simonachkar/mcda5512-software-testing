import { useState, useEffect } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import UserContext from './context';
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [user, loginUser] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/ping')
      console.log(res.data)
    }
    fetchData();
  }, [])

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
