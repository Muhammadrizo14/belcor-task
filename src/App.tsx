import React, {useEffect} from 'react';
import './App.scss';
import {Link, useNavigate, useNavigation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {changeOption} from "./redux/users/userSlice";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.status) {
      navigate('/login')
    }
  }, []);


  return (
    <div className="App">
      <Header/>
      <h1>Choose your option</h1>
      <Link to='exam' onClick={()=> dispatch(changeOption(1))}>first option</Link>
      <Link to='exam' onClick={()=> dispatch(changeOption(2))}>second option</Link>
      <Footer/>
    </div>
  );
}

export default App;
