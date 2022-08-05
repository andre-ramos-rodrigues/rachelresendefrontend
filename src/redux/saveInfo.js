import {sendHomeInfo} from '../redux/apiCalls'
import {infoStart, infoSuccess, infoError} from './InfoSlice'
import axios from 'axios'

export const saveInfo = async (homeTitle,homeText, getInfoContent, dispatch) => {
  if(homeTitle.length === 0 || homeText.length === 0) {
    console.log('titulo ou texto zerados')
    return
  }
  else {
    try{
    const res = await axios.put('http://localhost:5000/Info', {
      Home: {
        Title: homeTitle,
        Text: homeText
      }
    })
    console.log(res.data)
    console.log('atualizado')
    return res.data
  }catch(err){
    console.log(err)
  }
    //sendHomeInfo(title,text,dispatch)
  }
}