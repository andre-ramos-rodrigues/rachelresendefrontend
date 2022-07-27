import React from 'react'
import styled from 'styled-components'
import { mobile, screen, micro } from "../responsive";
import SchoolIcon from '@mui/icons-material/School';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import WorkIcon from '@mui/icons-material/Work';
import resume from '../img/ResumeRachel.jpeg'

const Container = styled.div`
  height: 100%;
  background-color: rgb(236, 229, 229);
  display: flex;
  min-width: 200px;
  max-width: 500px;
  flex-direction: column;
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
  margin-left: 10%;
  ${mobile({ marginLeft: '16%'})};
  ${mobile({ marginLeft: '10%'})};

@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Top = styled.div`
  flex: 1;
  padding: 10px;
  // background-color: rgb(50, 229, 229);
  height: 85%;
  width: 85%;
  margin-bottom: 20px;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-evenly;
  
`
const Bottom = styled.div`
  flex: 1;
  padding: 10px;
  //background: rgb(120, 150, 229);
  height: 85%;
  width: 85%;
  margin-bottom: 20px;
  border-radius: 15px;
`
const InnerContainer = styled.div`
margin-top: 25px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`
const Item = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 3px;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  display: flex;
`
const SubTitle = styled.span`
  text-align: center;
  font-size: 14px;
`
const ResumeFile = styled.a`
  display: flex;
  width: 30px;
  margin-left: 7px;

  &:hover {
    transform: scale(1.1);
  }
`

const Resume = () => {
  return (
    <Container>
      <ContentContainer>
      <Top>
        <Title><WorkIcon style={{marginLeft:'0px'}}/></Title>
        <InnerContainer>
          <ItemContainer>
            <Item>Data Ambassador</Item>
          <SubTitle><i>at Hurb - 2021</i></SubTitle>
          </ItemContainer>
          <ItemContainer>
            <Item>Marketing Specialist</Item>
          <SubTitle><i>at Stone - 2021</i></SubTitle>
          </ItemContainer>
          <ItemContainer>
            <Item>Media Manager</Item>
          <SubTitle><i>at CyberLabs - 2020-21</i></SubTitle>
          </ItemContainer>
          <ItemContainer>
            <Item>Digital AdOps</Item>
            <SubTitle><i>at Globo - 2017-20</i></SubTitle>
          </ItemContainer>
        </InnerContainer>
      </Top>
      <Bottom>
      <Title><SchoolIcon/></Title>
      <InnerContainer>
          <ItemContainer>
            <Item>Marketing Management</Item>
          <SubTitle><i>at IBMEC - 2019</i></SubTitle>
          </ItemContainer>
          <ItemContainer>
            <Item>Bacharel in Marketing</Item>
          <SubTitle><i>at IBMR - 2016</i></SubTitle>
          </ItemContainer>
          <ItemContainer>
            <Item>Technical Course in Design</Item>
          <SubTitle><i>at Infnet - 2016</i></SubTitle>
          </ItemContainer>
        </InnerContainer>
      </Bottom>
      </ContentContainer>
      <ResumeFile
        href={resume}
        download
      >
        <CloudDownloadIcon style={{color: 'rgb(50, 229, 229)', fontSize: '30px', marginBottom:'15px', marginLeft:'3px'}}/>
      </ResumeFile>
    </Container>
  )
}

export default Resume