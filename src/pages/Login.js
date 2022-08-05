import React, { useRef } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { mobile, screen, micro } from "../responsive";
import { useSelector, useDispatch } from 'react-redux'
import {userLogin} from '../redux/apiCalls'
import {logout} from '../redux/UserSlice'


const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(236, 229, 229);
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;


@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: rgb(236, 229, 229);
  padding: 15px;
  border-radius: 15px;
  height: 75%;
  max-width: 90%;
  ${micro({ minWidth: '205px' })};
`
const Label = styled.h2`
  font-weight: 400;
`
const InputUpperContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 25px 0px;
`
const InputName = styled.input`
margin-right: 15px;
flex: 1;
height: 40px;
border-radius: 5px;
border: none;
${micro({ width: '40%' })};
&::placeholder {
       padding: 5px;
   }
`
const Button = styled.button`
  margin: 25px 0px;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: none;
  align-self: center;
  background: white;
  opacity: 1;
  background-color: white;
  transition: background-color 0.3s;

  &:hover{
    cursor: pointer;
    color: #ffff;
    background-color: rgb(50, 229, 229);
  }
`
const LoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const form = useRef();
  const URL = process.env.REACT_APP_ADDRESS;
  const dispatch = useDispatch()
  const {userInfo, pending, error} = useSelector((state) => state.user)
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    userLogin({username, password}, dispatch)
  }
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      {
        userInfo.username.length > 0  ? (
          <LoggedContainer>
          <h4>You are logged as admin with the user {userInfo.username}</h4>
          <Button onClick={handleLogout}>Logout</Button>
          </LoggedContainer>
        ):(
          <FormContainer onSubmit={handleSubmit} ref={form}>
          <Label>Admin login</Label>
          <InputUpperContainer>
          <InputName type='text' placeholder='username' onChange={({target}) => setUsername(target.value)} name='username' id='username'/>
          <InputName type='password' placeholder='password' onChange={({target}) => setPassword(target.value)} name='password' id='password'/>
          </InputUpperContainer>
          <Button>{pending? 'wait' : 'send'}</Button>
          {error && <span style={{color: 'tomato'}}>something went wrong...</span>}
         </FormContainer>
        
        )
      }
      
    </Container>
  )
}

export default Login