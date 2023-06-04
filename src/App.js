import './App.css';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import { ContactList } from './screens/ContactList';
import { Info } from './screens/Info';
import { Edit } from './screens/Edit';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/contactlist" element={<ContactList />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
