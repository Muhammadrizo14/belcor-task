import React, {useState} from 'react';
import './styles.scss'
import {Link, useNavigate} from "react-router-dom";
import {addUser, loginUser} from "../../redux/users/userSlice";
import {useDispatch} from "react-redux";
const Index = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const login = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setUsername('')
    setPassword('')
    if (username === 'admin' && password === 'admin') {
      dispatch(loginUser())
      navigate('/')
    } else {
      setError(true)
    }
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
        {error && (
          <p style={{color: 'red'}}>incorrect username or password</p>
        )}
        <button type='submit' onClick={(e) => login(e)}>Login</button>
        <Link to='/register'>Do not have an account?</Link>
      </form>
    </div>
  );
};

export default Index;