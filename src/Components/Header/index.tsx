import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Link, useNavigate} from "react-router-dom";

const Index = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user)
  useEffect(() => {
    if (!user.status) {
      navigate('/login')
    }
  }, []);
  return (
    <header>
      <h1>Welcome {user.name}!</h1>
      <ul>
        <li><Link to={'/data'}>Data</Link></li>
        <li><Link to={'/'}>Home</Link></li>
      </ul>
    </header>
  );
};

export default Index;