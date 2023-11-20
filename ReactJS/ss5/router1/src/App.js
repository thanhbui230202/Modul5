import {Route,Routes} from 'react-router-dom'
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
