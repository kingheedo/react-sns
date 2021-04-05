import produce from 'immer'
import shortId from 'shortid'

export const initialState = {
    mainPosts:[],
    addPostLoading : false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading : false,
    addCommentDone: false,
    addCommentError: null,
    removePostLoading : false,
    removePostDone: false,
    removePostError: null

}

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User:{
        id:1,
        nickname:'사용자2'
    },
    Images: [{src:"https://cdn.pixabay.com/photo/2021/01/24/20/47/mountains-5946500_1280.jpg"},],
    Comments: ['댓글테스트'],
})
const dummyComment = (data) => ({
    id: shortId.generate(),
    ...data,
})

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const addPostRequestAction = (data) => ({
    type: ADD_POST_REQUEST,
    data
})
export const addPostSuccessAction = (data) => ({
    type: ADD_POST_SUCCESS,
    data
})
export const addPostFailureAction = (data) => ({
    type: ADD_POST_FAILURE,
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
})




const reducer = (state =  initialState, action) =>{
    return produce(state,(draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.err;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:{
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data))
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.err;
                break;

                case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.err;
                break;
            default:
                break;
        }
    })
}

export default reducer;

