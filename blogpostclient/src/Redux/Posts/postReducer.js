import { addAllPosts, deleteAllPosts, deleteSomePosts, addUserPosts, changeUserPosts, deleteUserPosts } from "./actionTypes";

const initialState = {};

export default function postReducer  (state = initialState ,action)  {
    switch (action.type) {
        case addUserPosts:
            console.log('data from POst Reducer user post', action.payload);
            return{
                ...state,
                userPosts: action.payload
            }
        
        case deleteUserPosts:
            return {};

        case changeUserPosts:
            console.log(state);
            break;
        
        case addAllPosts:
            console.log('data from POst Reducer all post', action.payload);
            return{
                ...state,
                AllPosts: action.payload
            }
    
        default:
            return {};
    }
}