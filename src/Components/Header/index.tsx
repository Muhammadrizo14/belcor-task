import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Link, useNavigate} from "react-router-dom";

const Index = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user)
  return (
    <header>
      <h1>Welcome {user.name}!</h1>
      <ul>
        <li><Link to={'/data'}>Data</Link></li>
        <li><Link to={'/'}>Home</Link></li>
        <li
          onClick={() => (
            localStorage.removeItem('status'),
              navigate('/login'))
          }
          style={{cursor: 'pointer'}}
        >
          Logout
        </li>
      </ul>
    </header>
  );
};

export default Index;