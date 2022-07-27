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
  left: -20px;
  top: -30px;
  z-index: 0;
  ${mobile({ width: "80px", height:"80px", top: '-10px', left: '-15px' })};
  ${micro({ display: 'none' })};
`

const Home = () => {
  return (
    <Container>
        <InfoContainer>
          <Info>
          <h2 style={{fontWeight: '400', marginBottom: '15px'}}>Olá, eu sou a Rachel!</h2> 
          Além de me formar em Publicidade pelo IBMR, possuo especialização em Gestão de Marketing pelo IBMEC e tenho conhecimento e habilidades analíticas, tais como SQL e Python.  Sou apaixonada por tecnologia e por tudo que é novo. <br/> Trabalho ensinando cultura da inovação e analítica no Hurb, como Data Ambassador e no tempo livre faço parte da WTM do Rio de Janeiro, comunidade voluntária, promovida pelo Google que incentiva mais mulheres na tecnologia. <br/> Tenho experiência principalmente com performance de operação comercial digital, foram mais 5 anos apenas trabalhando nesse setor, ao todo tenho mais de 7 anos em Marketing, passando por empresas como Globosat, Globo, Cyberlabs e Stone. <br/> Caso queira tomar um café ou esteja precisando de um planejamento de comunicação para seu produto ou negócio, entre em contato. 
          </Info>
          <Ball />
        </InfoContainer>
    </Container>
  )
}

export default Home