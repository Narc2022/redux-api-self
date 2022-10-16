import { ActionConstants } from "../Actions/action";

const initialState ={
    users:[],
};

export const userReducer = (state = initialState,{type,payload}) => {
     switch(type){
       case ActionConstants.GET_USER:
        return {...state,users:payload};
       default:
        return state;
     }
}