import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile, screen, micro } from "./responsive";
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  background-color: rgb(236, 229, 229);
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-width: 240px;
`

const Left = styled.div`
  margin-left: 20vw;
  ${mobile({ marginLeft: '12vw' })};
`

const NameContainer = styled.div`
  font-weight: 600;
  font-size: 50px;
  ${mobile({ fontSize: "30px", fontWeight: "500" })};
  ${micro({ fontSize: "25px", fontWeight: "500" })};
`

const TitleContainer = styled.div`
  font-size: 20px;
  font-weight: 300;
  ${mobile({ display: 'none' })};
`

const Right = styled.div`
  margin-right: 20vw;
  ${mobile({ marginRight: '12vw' })};
`

const Navbar = styled.div`
  display: flex;
  ${micro({ display: 'none' })};
`

const NavItem = styled.button`
  list-style: none;
  padding: 15px;
  border: none;
  border-radius: 20px;
  background-color: rgb(236, 229, 229);
  transition: background-color 0.3s;

  &:hover{
    cursor: pointer;
    color: #ffff;
    background-color: rgb(50, 229, 229);
  }
`
const ToggleMenuButton = styled.div`
  display: none;
  margin-left: 80px;
  cursor: pointer;
  border: none;
  background: rgb(232, 53, 85);
  border-radius: 5px;
  padding: 3px;
  color: white;

  &:hover {
    background: rgb(232, 80, 85);
  }
  ${micro({ display: 'flex' })};
`
const Menu = styled.div`
  background: rgb(232, 53, 85);
  min-width: 200px;
  width: 40%;
  position: absolute;
  z-index: 5000;
  top: 12%;
  right: 15%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  opacity: 0;
  transform: translateY(-5px);
  animation: animeLeft 0.3s forwards;


@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
`
const MenuOption = styled.button`
  height: 40px;
  width: 100%;
  background-color: rgb(232, 53, 85);
  border: none;
  border-bottom: 1px solid rgb(232, 80, 85);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  

  &:hover{
    background: rgb(232, 80, 85);
  }
`


const Header = () => {
  const [toggle, setToggle] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 550) {
        setToggle(false)
      }
}

    window.addEventListener('resize', handleResize)
  })

  const handleClick = () => {
    setToggle(!toggle)
    console.log('mostrando')

  }
  return (
    <Container>
      <Left>
      {
        toggle && 
        <Menu>
          <Link to='/'>
          <MenuOption onClick={() => setToggle(false)}>Home</MenuOption>
          </Link>
          <Link to='/Resume'>
          <MenuOption onClick={() => setToggle(false)}>Resume</MenuOption>
          </Link>
          <Link to='/Mentoring'>
          <MenuOption onClick={() => setToggle(false)}>Mentoring</MenuOption>
          </Link>
          <Link to='/Contact'>
          <MenuOption onClick={() => setToggle(false)}>Contact</MenuOption>
          </Link>
        </Menu> 

      }
        <NameContainer>
          Rachel Resende
        </NameContainer>
        <TitleContainer>
          <i>Data Ambassador | Hurb</i>
        </TitleContainer>
      </Left>
      <Right>
      <ToggleMenuButton>
      <MenuIcon onClick={handleClick}/>
      </ToggleMenuButton>
      <Navbar>
        <Link to='/'>
        <NavItem>
          Home
        </NavItem>
        </Link>
        <Link to='/Resume'>
        <NavItem>
          Resume
        </NavItem>
        </Link>
        <Link to='/Mentoring'>
        <NavItem>
        Mentoring
        </NavItem>
        </Link>
        <Link to='/Contact'>
        <NavItem>
        Contact
        </NavItem>
        </Link>
      </Navbar>
      </Right>
      
    </Container>
  )
}

export default Header