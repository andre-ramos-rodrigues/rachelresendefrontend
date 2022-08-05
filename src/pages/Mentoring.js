import React from 'react'
import styled from 'styled-components'
import { screen, mobile, micro } from '../responsive'
import { useSelector, useDispatch } from 'react-redux'
//import {getInfo} from '../redux/apiCalls'
//import { mentoringTitlePT, mentoringTitleEN, mentoringTextPT, mentoringTextEN } from '../texts'
import { getServiceInfo, updateServiceInfo, getENServiceInfo, updateENServiceInfo } from '../redux/apiCalls'

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
  width: 100%;
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
const InputTitle = styled.input`
  margin-bottom: 20px;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border: none;
  ${micro({ width: '40%' })};
  &::placeholder {
       padding: 5px;
   }
`
const InputText = styled.textarea`
  height: 240px;
  width: 300px;
  border-radius: 5px;
  border: none;
  ${micro({ width: '40%', height: '120px' })};
  &::placeholder {
       padding: 5px;
   }
`
const ServicosContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`
const Servico = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  justify-content: space-between;
  margin: 15px 0px;
`
const Nome = styled.div`
  display: flex;
  font-weight: 600;
`
const Preco = styled.div`
  display: flex;
  font-weight: 600;
  background-color: lightsalmon;
  border-radius: 15px;
  padding: 5px;
`

const Mentoring = () => {
  const dispatch = useDispatch()
  const edit = useSelector((state) => state.editMode.edit)
  const english = useSelector((state) => state.englishMode.englishOn)
  const {getServiceContent} = useSelector((state) => state.getService)
  const {getENServiceContent} = useSelector((state) => state.getENService)
  const [serviceTitle, setServiceTitle] = React.useState('')
  const [serviceText, setServiceText] = React.useState('')
  const [ENServiceTitle, setENServiceTitle] = React.useState('')
  const [ENServiceText, setENServiceText] = React.useState('')

  const handleSave = async(e) => {
    e.preventDefault()
    const updated = await updateServiceInfo(serviceTitle, serviceText, dispatch)
    const updatedEN = await updateENServiceInfo(ENServiceTitle, ENServiceText, dispatch)
  }

  React.useEffect(() => {
    getServiceInfo(dispatch)
    getENServiceInfo(dispatch)
    setServiceTitle(getServiceContent.title)
    setServiceText(getServiceContent.text)
    setENServiceTitle(getENServiceContent.title)
    setENServiceText(getENServiceContent.text)
  }, [dispatch, getENServiceContent.text, getENServiceContent.title, getServiceContent.text, getServiceContent.title])

  return (
    <Container>
      <InfoContainer>
        {
          edit===true ? (
            <>
            <Info style={{display: 'flex', flexDirection:'column'}}>
            <InputTitle type='text' placeholder='Título' autoFocus 
            value={english? ENServiceTitle : serviceTitle} onChange={english? e => setENServiceTitle(e.target.value) : e => setServiceTitle(e.target.value)}/>
            <InputText type='formfield' placeholder='Texto' 
            value={english? ENServiceText : serviceText} onChange={english? e => setENServiceText(e.target.value) : e=> setServiceText(e.target.value)}/>
            </Info>
            <button onClick={handleSave} style={{height: '40px', borderRadius: '15px', 
            border: 'none', alignSelf: 'center', background: 'tomato', width: '60px'}}>Salvar</button>
            <Ball />
            </>
          ):(
            <>
            <Info>
              {
                <>
                <h2 style={{fontWeight: '400', marginBottom: '15px'}}>{english ? ENServiceTitle : serviceTitle}</h2> 
                <p style={{marginTop: '20px'}}>{ english? ENServiceText : serviceText}</p>
                </>
              }
              <ServicosContainer>
                <Servico><Nome>Social media</Nome><Preco>R$ 500</Preco></Servico>
                <Servico><Nome>Tráfego pago</Nome><Preco>R$ 600</Preco></Servico>
                <Servico><Nome>Mentoria</Nome><Preco>R$ 900</Preco></Servico>
              </ServicosContainer>
            </Info>
            <Ball />
            </>
          )
        }
        </InfoContainer>
    </Container>
  )
}

export default Mentoring