
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { BookList } from './components/ListBook';
import { UpdateBook } from './components/UpdateBook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BookList></BookList>}></Route>
      <Route path='/update/:id' element={<UpdateBook></UpdateBook>}></Route>
    </Routes>
  );
}

export default App;
