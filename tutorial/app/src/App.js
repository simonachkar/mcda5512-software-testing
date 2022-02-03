import { useState } from "react";
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
