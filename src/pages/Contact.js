import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import axios from 'axios'
import { mobile, screen, micro } from "../responsive";

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
const InputEmail = styled.input`
flex: 1;
height: 40px;
border-radius: 5px;
border: none;
${micro({ width: '40%' })};
&::placeholder {
       padding: 5px;
   }
`
const InputText = styled.textarea`
height: 140px;
border-radius: 5px;
border: none;
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
const SuccessMessage = styled.span`
  font-weight: 3000;
  color: lightgreen;
  text-align: center;
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

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [ success, setSuccess ] = React.useState(false)
  const form = useRef();
  const URL = process.env.REACT_APP_ADDRESS;
  const emailjs1 = process.env.REACT_APP_EMAILJS1;
  const emailjs2 = process.env.REACT_APP_EMAILJS2;
  const emailjs3 = process.env.REACT_APP_EMAILJS3;
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     let resp = await axios.post(`${URL}/Contact`, {
        name: name,
        email: email,
        message: message
      });
      console.log(resp)
      resp.statusText === 'OK' && setSuccess(true)
    } catch (err){
      console.log(err)
    }
    emailjs.sendForm(emailjs1, emailjs2, form.current, emailjs3)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  ;
    setName('')
    setEmail('')
    setMessage('')
  }

  React.useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }, [success])

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit} ref={form}>
        <Label>Send me a message!</Label>
        <InputUpperContainer>
        <InputName type='text' placeholder='Your name' value={name} onChange={({target}) => setName(target.value)} name='name' id='name'/>
        <InputEmail type='email' placeholder='Your email' value={email} onChange={({target}) => setEmail(target.value)} data-rule='email' data-msg='please enter a valid email' name='email' id='email'/>
        </InputUpperContainer>
        <InputText type='formfield' placeholder='Your message' value={message} onChange={({target}) => setMessage(target.value)} name='message' id='message'/>
        <Button>Send</Button>
        {
          success && <SuccessMessage>message sent!</SuccessMessage>
        }
      </FormContainer>
    </Container>
  )
}

export default Contact