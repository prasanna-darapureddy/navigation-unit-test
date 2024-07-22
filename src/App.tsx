import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/register/signUp/SignUp';
import Login from './components/register/login/Login';
import Home from './components/register/home/Home';
import SignUpFun from './components/register/signUp/SignUpFun';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signup' element={<SignUpFun />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
