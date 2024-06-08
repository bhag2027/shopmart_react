import logo from './logo.svg';
import './App.css';
import AddShop from './components/AddShop';
import SearchShop from './components/SearchShop';
import DeleteShop from './components/DeleteShop';
import ViewallShop from './components/ViewallShop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddShop/>}/>
    <Route path='/search' element={<SearchShop/>}/>
    <Route path='/delete' element={<DeleteShop/>}/>
    <Route path='/view' element={<ViewallShop/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
