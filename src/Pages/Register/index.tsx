import React, {useState} from 'react';
import './styles.scss'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../redux/users/userSlice";

const Index = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const register = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(addUser({
      name,
      username,
      password
    }))
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='register'>
      <h1>Registration</h1>
      <form className='register-form'>
        <input
          type="text"
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type='submit' onClick={(e) => register(e)}>Registration</button>
        <Link to='/login'>Already have an account?</Link>
      </form>
    </div>
  );
};

export default Index;