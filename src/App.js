import Header from './Header';
import './App.css';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Mentoring from './pages/Mentoring'
import styled from 'styled-components'
import { mobile, screen, micro } from "./responsive";
import profile from  './img/RachelProfile.jpg'

const Container = styled.div`
  min-height: 60vh;
  background-color: rgb(236, 229, 229);
  display: flex;
  width: 100vw;
  min-width: 240px;
  ${mobile({ flexDirection: "column"})};
`
const Left = styled.div`
  flex: 1;
  margin-left: 20vw;
  ${mobile({ margin: 'auto' })};
`
const Right = styled.div`
  flex: 1;
  margin-right: 20vw;
  ${screen({ flex: "2", margin: '0px 30px', minWidth: '350px' })};
  ${mobile({ margin: '0px 15px', minWidth: '250px' })};
  ${micro({ margin: '0px', minWidth: '100px' })};
  flex-wrap: wrap;
`
const Photo = styled.img`
  margin-top: 0px;
  width: 450px;
  ${screen({ width: "250px", marginTop: '30px' })};
  ${mobile({ width: "150px", marginTop: '0px'})};
  ${micro({ width: "120px"})};
  flex: 1;
`
const ContentContainer = styled.div`
  flex-wrap: wrap;
`

function App() {
  return (
    <>
      <Header />
      <Container>
        <Left>
            <Photo src={profile} alt='rachel'/>
        </Left>
        <Right>
          <ContentContainer>
        <Routes>
        <Route element={<Home />} path='/' exact/>
        <Route element={<Resume />} path='/resume' exact/>
        <Route element={<Contact />} path='/contact' exact/>
        <Route element={<Mentoring />} path='/mentoring' exact/>
        </Routes>
        </ContentContainer>
        </Right>
      </Container>      
      <Footer />
    </>
  );
}

export default App;
