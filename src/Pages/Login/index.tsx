import React, {useState} from 'react';
import './styles.scss'
import {Link, useNavigate} from "react-router-dom";
const Index = () => {
  let navigate = useNavigate()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const register = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    navigate('/')

  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <form className='login-form'>
        <input
          type="text"
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}

        />
        <button type='submit' onClick={(e) => register(e)}>Login</button>
        <Link to='/register'>Do not have an account?</Link>
      </form>
    </div>
  );
};

export default Index;