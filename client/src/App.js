
import './App.css';
import AddUser from './components/adduser';
import NavBar from './components/navbar';
import AllUsers from './components/alluser';
import EditUser from './components/edituser';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllUsers/>}/>
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
