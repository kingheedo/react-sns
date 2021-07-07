import produce from 'immer';

export const initialState = {
    signUpLoading : false,
    signUpDone: false,
    signUpError: null,
    logInLoading : false,
    logInDone: false,
    logInError: null,
    followLoading : false,
    followDone: false,
    followError: null,
    unfollowLoading : false,
    unfollowDone: false,
    unfollowError: null,
    me: null,
}
const dummyUser = (data) => ({
    ...data,
    nickname:'닉네임',
    id:1,
    Posts:[{id: 1}],
    Followings:[{nickname:'부기'},{nickname:'부기2'},{nickname:'부기3'}],
    Followers:[{nickname: 'king'}, {nickname: 'king1'}]

})
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_RESET = 'SIGN_UP_RESET';

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
            case FOLLOW_REQUEST:
            draft.followLoading = true;
            draft.followError = null;
            draft.followDone = false;
            break;

            case FOLLOW_SUCCESS:
            draft.followLoading = false;
            draft.followDone = true;
            draft.me.Followings.push({id: action.data});
            break;
            
            case FOLLOW_FAILURE:
            draft.followLoading = false;
            draft.followError = action.error;
            break;

            case UNFOLLOW_REQUEST:
            draft.unfollowLoading = true;
            draft.unfollowError = null;
            draft.unfollowDone = false;
            break;

            case UNFOLLOW_SUCCESS:
            draft.unfollowLoading = false;
            draft.unfollowDone = true;
            draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data)
            break;
            
            case UNFOLLOW_FAILURE:
            draft.unfollowLoading = false;
            draft.unfollowError = action.error;
            break;

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

            case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpError = null;
            draft.signUpDone = false;
            break;

            case SIGN_UP_SUCCESS:
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;
            
            case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;
            case SIGN_UP_RESET:
            draft.signUpDone = false;
            break;

            case REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data)
            break;

            default: break;

        }
    })
} 
export default reducer;