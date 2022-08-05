import {loginStart, loginSuccess, loginError} from './UserSlice'
import {updateHomeStart, updateHomeSuccess, updateHomeError} from './UpdateHomeSlice'
import {getHomeStart, getHomeSuccess, getHomeError} from './GetHomeSlice'
import {updateServiceStart, updateServiceSuccess, updateServiceError} from './UpdateServiceSlice'
import {getServiceStart, getServiceSuccess, getServiceError} from './GetServiceSlice'
import {updateENHomeStart, updateENHomeSuccess, updateENHomeError} from './UpdateENHomeSlice'
import {getENHomeStart, getENHomeSuccess, getENHomeError} from './GetENHomeSlice'
import {updateENServiceStart, updateENServiceSuccess, updateENServiceError} from './UpdateENServiceSlice'
import {getENServiceStart, getENServiceSuccess, getENServiceError} from './GetENServiceSlice'
import axios from 'axios'

export const userLogin = async(user, dispatch) => {
    dispatch(loginStart())
    try{
      const res = await axios.post(process.env.REACT_APP_ADDRESS + '/auth/login', user)
      res && dispatch(loginSuccess(res.data))
    }catch(err){
      dispatch(loginError())
    }
}

export const updateHomeInfo = async(title, text, dispatch) => {
  dispatch(updateHomeStart())
  try{
    const res = await axios.put(process.env.REACT_APP_ADDRESS + '/info/home', {
        title: title,
        text: text
    })
    res && dispatch(updateHomeSuccess(res.data))
  }catch(err){
    dispatch(updateHomeError())
  }
}

export const getHomeInfo = async(dispatch) => {
  dispatch(getHomeStart())
  try{
    const res = await axios.get(process.env.REACT_APP_ADDRESS + '/info/home')
    console.log(res.data)
    res.data && dispatch(getHomeSuccess({
      title: res.data.Title,
      text: res.data.Text,
    }))
    console.log('enviando info de api calls ' + res.data.Text)
  }catch(err){
    dispatch(getHomeError())
  }
}

export const updateENHomeInfo = async(title, text, dispatch) => {
  dispatch(updateENHomeStart())
  try{
    const res = await axios.put(process.env.REACT_APP_ADDRESS + '/info/ENhome', {
        title: title,
        text: text
    })
    res && dispatch(updateENHomeSuccess(res.data))
  }catch(err){
    dispatch(updateENHomeError())
  }
}

export const getENHomeInfo = async(dispatch) => {
  dispatch(getENHomeStart())
  try{
    const res = await axios.get(process.env.REACT_APP_ADDRESS + '/info/ENhome')
    console.log(res.data)
    res.data && dispatch(getENHomeSuccess({
      title: res.data.Title,
      text: res.data.Text,
    }))
    console.log('enviando info de api calls ' + res.data.Text)
  }catch(err){
    dispatch(getENHomeError())
  }
}

export const updateServiceInfo = async(title, text, dispatch) => {
  dispatch(updateServiceStart())
  try{
    const res = await axios.put(process.env.REACT_APP_ADDRESS + '/info/service', {
        title: title,
        text: text
    })
    res && dispatch(updateServiceSuccess(res.data))
  }catch(err){
    dispatch(updateServiceError())
  }
}

export const getServiceInfo = async(dispatch) => {
  dispatch(getServiceStart())
  try{
    const res = await axios.get(process.env.REACT_APP_ADDRESS + '/info/service')
    console.log(res.data)
    res.data && dispatch(getServiceSuccess({
      title: res.data.Title,
      text: res.data.Text,
    }))
    console.log('enviando info de api calls ' + res.data.Text)
  }catch(err){
    dispatch(getServiceError())
  }
}

export const updateENServiceInfo = async(title, text, dispatch) => {
  dispatch(updateENServiceStart())
  try{
    const res = await axios.put(process.env.REACT_APP_ADDRESS + '/info/ENservice', {
        title: title,
        text: text
    })
    res && dispatch(updateENServiceSuccess(res.data))
  }catch(err){
    dispatch(updateENServiceError())
  }
}

export const getENServiceInfo = async(dispatch) => {
  dispatch(getENServiceStart())
  try{
    const res = await axios.get(process.env.REACT_APP_ADDRESS + '/info/ENservice')
    console.log(res.data)
    res.data && dispatch(getENServiceSuccess({
      title: res.data.Title,
      text: res.data.Text,
    }))
    console.log('enviando info de api calls ' + res.data.Text)
  }catch(err){
    dispatch(getENServiceError())
  }
}