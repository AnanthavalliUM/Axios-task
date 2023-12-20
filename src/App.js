import './App.css';
import Create from './Components/create';
import Read from './Components/add';
import Update from './Components/update';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h2>CRUD Operation</h2>
      <Routes>
        <Route path='/'  element={<Create />}  />
        <Route path='/read'  element={<Read />}  />
        <Route path='/update'  element={<Update />} />



      </Routes>
      
    </div>
  );
}

export default App;
