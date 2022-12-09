import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UpdateLogin from './Components/UpdateLogin';
import Protected from './Components/Protected';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Protected Cmp={Home}/>}></Route>
            <Route path="/home" element={<Protected Cmp={Home}/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/updateLogin" element={<UpdateLogin />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
