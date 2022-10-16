

//constants
export const ActionConstants ={
    GET_USER :"GET_USER",
    SELECTED_USER : "SELECTED_USER",
    REMOVE_SELECTED_USER : "REMOVE_SELECTED_USER"
}


export const setUsers = (users) =>{
    return{
        type:ActionConstants.GET_USER,
        payload:users,
    };
};