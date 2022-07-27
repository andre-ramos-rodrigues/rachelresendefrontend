import React from 'react'
import styled from 'styled-components'
import { screen, mobile, micro } from '../responsive'

const Container = styled.div`
  height: 100%;
  background-color: rgb(236, 229, 229);
  display: flex;
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
const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  display: flex;
  //width: 100%;
  min-width: 300px;
  ${mobile({ minWidth: "200px", marginLeft:"20px" })};
  ${micro({ minWidth: "100px", marginLeft:"5px" })};
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 50px;
  position: relative;
`
const Info = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-weight: 400;
  text-align: justify;
  z-index: 200;
  font-size: 16px;
  ${mobile({ fontSize: "15px" })};
  ${micro({ fontSize: "14px" })};
`
const Ball = styled.div`
  background-color: rgb(50, 229, 229);
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: absolute;
  right: -30px;
  top: 190px;
  z-index: 0;
  ${mobile({ width: "80px", height:"80px", top: '120px', right: '-10px' })};
  ${micro({ display: 'none' })};
`


const Mentoring = () => {
  return (
    <Container>
      <InfoContainer>
          <Info>
          <h2 style={{fontWeight: '400', marginBottom: '15px'}}>Bem-vindos à mentoria.</h2> 
          Se tiver interesse em receber orientações para crescimento de vendas e amadurecimento de negócio, realizo mentorias aos sábados, de 50 minutos por sessão, sendo 4 sessões por mês e como resultado um plano de ação para melhorar o desempenho da sua marca e/ou das suas vendas, vai depender da sua necessidade. <br/> A contratação é mensal, no valor de R$900 reais. Caso precise de desenvolvimento web, como sites e aplicações, tenho um time para somar e contribuir com o projeto, podendo ter alteração de valor. 
          </Info>
          <Ball />
        </InfoContainer>
    </Container>
  )
}

export default Mentoring