import produce from 'immer'
import shortId from 'shortid'
import faker from 'faker'

export const initialState = {
    mainPosts:[],
    imagePaths:[],
    hasMorePosts: true,
    likePostLoading :false,
    likePostDone : false,
    likePostError : null,
    unlikePostLoading : false,
    unlikePostDone: false,
    unlikePostError: null,
    loadPostLoading : false,
    loadPostDone: false,
    loadPostError: null,
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

// export const generateDummyPost = (number) =>
// Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     content: faker.lorem.paragraph(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//     },
//     Images: [{
//         src: faker.image.image()
//     }],
//     Comments:[{
//         id: shortId.generate(),
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence(),
//     }]
    
// }))
// const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User:{
//         id:1,
//         nickname:'사용자2'
//     },
//     Images: [{src:"https://cdn.pixabay.com/photo/2021/01/24/20/47/mountains-5946500_1280.jpg"},],
//     Comments: ['댓글테스트'],
// })
// const dummyComment = (data) => ({
//     id: shortId.generate(),
//     ...data,
// })
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';


export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

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
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS:{
                draft.likePostLoading = false;
                draft.likePostDone = true;
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId)
                post.Likers.push({id: action.data.UserId})
                break;
            }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;

            case UNLIKE_POST_REQUEST:
            draft.unlikePostsLoading = true;
            draft.unlikePostsDone = false;
            draft.unlikePostsError = null;
            break;

            case UNLIKE_POST_SUCCESS:{
            const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
            post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
            draft.unlikePostsLoading = false;
            draft.unlikePostsDone = true;
            break;
            }
            case UNLIKE_POST_FAILURE:
            draft.unlikePostsLoading = false;
            draft.unlikePostsError = action.error;
            break;  

            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(action.data);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.error;
                break;

            case LOAD_POSTS_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostLoading = false;
                draft.loadPostDone = true;
                draft.mainPosts = action.data.concat(draft.mainPosts);
                draft.hasMorePosts = draft.mainPosts.length < 50;
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
                
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:{
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;

            case REMOVE_POST_REQUEST:
            draft.removePostLoading = true;
            draft.removePostDone = false;
            draft.removePostError = null;
            break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            default:
                break;
        }
    })
}

export default reducer;

