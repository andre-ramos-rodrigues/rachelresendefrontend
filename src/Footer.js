import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { mobile, screen } from "./responsive";

const Container = styled.div`
background-color: rgb(232, 53, 85);
height: 20vh;
width: 100vw;
min-width: 240px;
  `
const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 10vw;
  padding-top: 50px;
`
const ItemContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`
const Logo = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &:hover{
    cursor: pointer;
    transform: scale(1.02);
    opacity: 1;
`
const Info = styled.button`
  list-style: none;
  color: #ffff;
  padding: 15px;
  border: none;
  background-color: rgb(232, 53, 85);
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, opacity 0.9ms;
  ${mobile({ display: "none" })};

  &:hover{
    cursor: pointer;
    transform: scale(1.02);
    opacity: 1;
  }
`

const Social = styled.span`
  font-weight: 300;
  padding-bottom: 6px;
  text-align: center;
`


const Footer = () => {
  const IG = process.env.REACT_APP_IG
  const LI = process.env.REACT_APP_LI
  return (
    <Container>
      <ItemsContainer>
      <ItemContainer href={LI}>
        <Logo>
        <LinkedInIcon style={{color: 'white'}}/>
        </Logo>
        <Info>
          <Social>Linkedin</Social>
        </Info>
      </ItemContainer>
      <ItemContainer href={IG}>
        <Logo>
        <InstagramIcon style={{color: 'white'}}/>
        </Logo>
        <Info>
        <Social>Instagram</Social>
        </Info>
      </ItemContainer>
      <ItemContainer href='https://accounts.google.com'>
        <Logo>
        <EmailIcon style={{color: 'white'}}/>
        </Logo>
        <Info>
          <Social>Email</Social>
        </Info>
      </ItemContainer>
      </ItemsContainer>
    </Container>
  )
}

export default Footer