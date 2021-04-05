import produce from 'immer';

export const initialState = {
    logInLoading : false,
    logInDone: false,
    logInError: null,
    me: null,
}
const dummyUser = (data) => ({
    ...data,
    nickname:'닉네임',
    id:1,
    Posts:[{id: 1}],
    Followings:[{nickname:'부기'},{nickname:'부기2'},{nickname:'부기3'}],
    Followers:[{nickname: 'king'}]

})
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data,
})
export const loginSuccessAction = (data) => ({
    type: LOG_IN_SUCCESS,
    data,
}) 
export const loginFailureAction = (data) => ({
    type: LOG_IN_FAILURE,
    data,
}) 



const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
        switch(action.type) {
            case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInError = null;
            draft.logInDone = false;
            break;

            case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.logInDone = true;
            draft.me = dummyUser(action.data);
            break;
            
            case LOG_IN_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;

            case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;

            case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
            
            case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;

            case REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data)
            break;

            default: break;

        }
    })
} 
export default reducer;