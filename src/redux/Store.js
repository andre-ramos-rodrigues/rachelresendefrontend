import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import editModeReducer from './EditModeSlice'
import englishModeReducer from './EnglishModeSlice'
import infoReducer from './InfoSlice'
import getHomeReducer from './GetHomeSlice'
import updateHomeReducer from './UpdateHomeSlice'
import getENHomeReducer from './GetENHomeSlice'
import updateENHomeReducer from './UpdateENHomeSlice'
import getServiceReducer from './GetServiceSlice'
import updateServiceReducer from './UpdateServiceSlice'
import getENServiceReducer from './GetENServiceSlice'
import updateENServiceReducer from './UpdateENServiceSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    editMode: editModeReducer,
    englishMode: englishModeReducer,
    info: infoReducer,
    getHome: getHomeReducer,
    updateHome: updateHomeReducer,
    getENHome: getENHomeReducer,
    updateENHome: updateENHomeReducer,
    getService: getServiceReducer,
    updateService: updateServiceReducer,
    getENService: getENServiceReducer,
    updateENService: updateENServiceReducer
  },
})