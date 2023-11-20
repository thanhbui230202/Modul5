import logo from './logo.svg';
import './App.css';
import { ListContact } from './components/ListContact';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<ListContact></ListContact>}></Route>
    </Routes>
  );
}

export default App;
