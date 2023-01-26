import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMovie from './Components/AddMovie';
import DescMovie from './Components/DescMovie';
import EditContact from './Components/EditContact';
import EditMovie from './Components/EditMovie';
import EditProfile from './Components/EditProfile';
import ErrorsC from './Components/ErrorsC';
import Home from './Components/Home'
import ListContact from './Components/ListContact';
import ListMovies from './Components/ListMovies';
import Login from './Components/Login';
import NavUser from './Components/NavUser';
import PrivateRoute from './Components/PrivateRoute';
import Profil from './Components/Profil';
import Register from './Components/Register';





function App() {
  return (
    <div>
      <NavUser class="navbar"/>
      <ErrorsC/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/listUsers' element={<ListContact/>}/>
        <Route path='/editContact/:id' element={<EditContact/>}/>
        <Route path='/editProfile/:id' element={<EditProfile/>}/>
        <Route path='/listMovies' element={<ListMovies/>}/>
        <Route path='/addMovies' element={<AddMovie/>}/>
        <Route path='/descMovie/:id' element={<DescMovie/>}/>
        <Route path='/editMovie/:id' element={<EditMovie/>}/>
        
      </Routes>
     
    </div>

  );
}


export default App;