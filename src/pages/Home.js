import React from 'react'
import styled from 'styled-components'
import { screen, mobile, micro } from '../responsive'
import { useSelector, useDispatch } from 'react-redux'
import {getHomeInfo, updateHomeInfo, getENHomeInfo, updateENHomeInfo} from '../redux/apiCalls'
//import {saveInfo} from '../redux/saveInfo'
import {homeTitlePT, homeTitleEN, homeTextPT, homeTextEN} from '../texts'
import axios from 'axios'

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
const InputTitle = styled.input`
  margin-bottom: 20px;
  height: 40px;
  min-width: 300px;
  border-radius: 5px;
  border: none;
  ${micro({ width: '40%' })};
  &::placeholder {
       padding: 5px;
   }
`
const InputText = styled.textarea`
  height: 240px;
  min-width: 300px;
  border-radius: 5px;
  border: none;
  ${micro({ width: '40%', height: '120px' })};
  &::placeholder {
       padding: 5px;
   }
`

const Home = () => {
  const dispatch = useDispatch()
  const {getHomeContent} = useSelector((state) => state.getHome)
  const {getENHomeContent} = useSelector((state) => state.getENHome)
  const [homeTitle, setHomeTitle] = React.useState('')
  const [homeText, setHomeText] = React.useState('')
  const [ENhomeTitle, setENHomeTitle] = React.useState('')
  const [ENhomeText, setENHomeText] = React.useState('')
  const edit = useSelector((state) => state.editMode.edit)
  const user = useSelector((state) => state.user.userInfo)
  const english = useSelector((state) => state.englishMode.englishOn)

  const handleSave = async(e) => {
    e.preventDefault()
    //saveInfo(homeTitle, homeText, getHomeContent, dispatch)
    const updated = await updateHomeInfo(homeTitle, homeText, dispatch)
    const updatedEN = await updateENHomeInfo(ENhomeTitle, ENhomeText, dispatch)
  }

  React.useEffect(() => {
    getHomeInfo(dispatch)
    getENHomeInfo(dispatch)
    console.log('recebendo infos da api')
    setHomeText(getHomeContent.text)
    setHomeTitle(getHomeContent.title)
    setENHomeText(getENHomeContent.text)
    setENHomeTitle(getENHomeContent.title)
  }, [dispatch, getENHomeContent.text, getENHomeContent.title, getHomeContent])

  return (
    <Container>
      <InfoContainer>
      {
        edit === true ? 
        (
          <>
          <Info style={{display: 'flex', flexDirection:'column'}}>
            <InputTitle type='text' placeholder='Título' autoFocus 
            value={english ? ENhomeTitle : homeTitle} 
            onChange={english? e => setENHomeTitle(e.target.value) : e => setHomeTitle(e.target.value)}/>
            <InputText type='formfield' placeholder='Texto' 
            value={english? ENhomeText : homeText} 
            onChange={english? e => setENHomeText(e.target.value) : e => setHomeText(e.target.value)}/>
          </Info>
          <button onClick={handleSave} style={{height: '40px', borderRadius: '15px', 
          border: 'none', alignSelf: 'center', background: 'tomato', width: '60px'}}>Salvar</button>
          <Ball />
          </>
        ) : (
          <>
          <Info>
          {
            <h2 style={{fontWeight: '400', marginBottom: '15px'}}>{english ? ENhomeTitle : homeTitle}</h2> 
          }
          {
            <p>{english? ENhomeText : homeText}</p>     
          }
          
          </Info>
          <Ball />
          </>
        )
      }
        </InfoContainer>
    </Container>
  )
}

export default Home