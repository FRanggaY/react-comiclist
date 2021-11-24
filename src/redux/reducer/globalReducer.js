import ActionType from './globalActionType';

const globalState = {
  theme: 'lightTheme',
}

const rootReducer = (state=globalState, action) => {
  switch(action.type){
    case ActionType.CHANGE_DARK_THEME:
        return{
            ...state,
            theme: 'darkTheme',
        }
    case ActionType.CHANGE_LIGHT_THEME:
        return{
            ...state,
            theme: 'lightTheme',
        }
    default:
        return state;
  }
}

export default rootReducer;