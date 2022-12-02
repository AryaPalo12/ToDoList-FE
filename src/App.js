import { useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Main from './pages/main';
import Register from './pages/register';
import { setId, setLogin, setUser } from "./shared/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["accessToken", "userId", "email"]);
  const reduxData = useSelector((state) => state.auth);

  useEffect(() => {
    if (cookies) {
      dispatch(setLogin(cookies.accessToken));
      dispatch(setId(cookies.id));
      dispatch(setUser(cookies.number));
    }
  }, [reduxData.isOpen]);

  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App;