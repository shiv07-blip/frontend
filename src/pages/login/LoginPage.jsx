import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/login/Login';


const LoginPage = () => {
  const navigate = useNavigate();
  // const { isAuthenticated } = useSelector((state) => state.user);

  // useEffect(() => {
  //   // if(isAuthenticated === true){
  //   //   navigate("/");
  //   // }
  // }, [])
  
  return (
    <div>
        <Login/>
    </div>
  )
}

export default LoginPage;