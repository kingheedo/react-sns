import produce from '../util/produce';

export const initialState = {
    mainPosts: [],
    singlePost: null,
    imagePaths: [],
    hasMorePosts: true,

    removeBookmarkLoading: false,
    removeBookmarkDone: false,
    removeBookmarkError: null,

    addBookmarkLoading: false,
    addBookmarkDone: false,
    addBookmarkError: null,

    likePostLoading: false,
    likePostDone: false,
    likePostError: null,

    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,

    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,

    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,

    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,

   retweetLoading: false,
   retweetDone: false,
   retweetError: null,
   
   editPostContentLoading: false,
   editPostContentDone: false,
   editPostContentError: null,
   
   deltePostImageLoading: false,
   deltePostImageDone: false,
   deltePostImageError: null,

   addReportLoading: false,
   addReportDone: false,
   addReportError: null,

};

export const ADD_REPORT_REQUEST = 'ADD_REPORT_REQUEST';
export const ADD_REPORT_SUCCESS = 'ADD_REPORT_SUCCESS';
export const ADD_REPORT_FAILURE = 'ADD_REPORT_FAILURE';

export const DELETE_POST_IMAGE_REQUEST = 'DELETE_POST_IMAGE_REQUEST';
export const DELETE_POST_IMAGE_SUCCESS = 'DELETE_POST_IMAGE_SUCCESS';
export const DELETE_POST_IMAGE_FAILURE = 'DELETE_POST_IMAGE_FAILURE';

export const EDIT_POST_CONTENT_REQUEST = 'EDIT_POST_CONTENT_REQUEST';
export const EDIT_POST_CONTENT_SUCCESS = 'EDIT_POST_CONTENT_SUCCESS';
export const EDIT_POST_CONTENT_FAILURE = 'EDIT_POST_CONTENT_FAILURE';

export const LOAD_USER_BOOKMARKS_REQUEST = 'LOAD_USER_BOOKMARKS_REQUEST';
export const LOAD_USER_BOOKMARKS_SUCCESS = 'LOAD_USER_BOOKMARKS_SUCCESS';
export const LOAD_USER_BOOKMARKS_FAILURE = 'LOAD_USER_BOOKMARKS_FAILURE';

export const ADD_BOOKMARK_REQUEST = 'ADD_BOOKMARK_REQUEST';
export const ADD_BOOKMARK_SUCCESS = 'ADD_BOOKMARK_SUCCESS';
export const ADD_BOOKMARK_FAILURE = 'ADD_BOOKMARK_FAILURE';

export const REMOVE_BOOKMARK_REQUEST = 'REMOVE_BOOKMARK_REQUEST';
export const REMOVE_BOOKMARK_SUCCESS = 'REMOVE_BOOKMARK_SUCCESS';
export const REMOVE_BOOKMARK_FAILURE = 'REMOVE_BOOKMARK_FAILURE';

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

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addPostRequestAction = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});
export const addPostSuccessAction = (data) => ({
    type: ADD_POST_SUCCESS,
    data,
});
export const addPostFailureAction = (data) => ({
    type: ADD_POST_FAILURE,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_REPORT_REQUEST:
                draft.addReportLoading = true;
                draft.addReportDone = false;
                draft.addReportError = null;
                break;
            case ADD_REPORT_SUCCESS: {
                draft.addReportLoading = false;
                draft.addReportDone = true;
                break;
            }
            case ADD_REPORT_FAILURE:
                draft.addReportLoading = false;
                draft.addReportError = action.error;
                break;
            
            case DELETE_POST_IMAGE_REQUEST:
                draft.deletePostImageLoading = true;
                draft.deletePostImageDone = false;
                draft.deletePostImageError = null;
                break;
            case DELETE_POST_IMAGE_SUCCESS: {
                draft.deletePostImageLoading = false;
                draft.deletePostImageDone = true;
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Images = post.Images.filter((v) => v.id !== action.data.ImageId);
                break;
            }
            case DELETE_POST_IMAGE_FAILURE:
                draft.deletePostImageLoading = false;
                draft.deletePostImageError = action.error;
                break;
            
            case REMOVE_BOOKMARK_REQUEST:
                draft.removeBookmarkLoading = true;
                draft.removeBookmarkDone = false;
                draft.removeBookmarkError = null;
                break;
            case REMOVE_BOOKMARK_SUCCESS: {
                draft.removeBookmarkLoading = false;
                draft.removeBookmarkDone = true;
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Bookmarkers = post.Bookmarkers.filter((v) => v.id !== action.data.UserId);
                break;
            }
            case REMOVE_BOOKMARK_FAILURE:
                draft.removeBookmarkLoading = false;
                draft.removeBookmarkError = action.error;
                break;
            
            case EDIT_POST_CONTENT_REQUEST:
                draft.editPostContentLoading = true;
                draft.editPostContentDone = false;
                draft.editPostContentError = null;
                break;
            case EDIT_POST_CONTENT_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.content = action.data.content; 
                draft.editPostContentLoading = false;
                draft.editPostContentDone = true;
                
                break;
            }
            case EDIT_POST_CONTENT_FAILURE:
                draft.editPostContentLoading = false;
                draft.editPostContentError = action.error;
                break;
            
            case ADD_BOOKMARK_REQUEST:
                draft.addBookmarkLoading = true;
                draft.addBookmarkDone = false;
                draft.addBookmarkError = null;
                break;
            case ADD_BOOKMARK_SUCCESS: {
                draft.addBookmarkLoading = false;
                draft.addBookmarkDone = true;
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Bookmarkers.push({ id: action.data.UserId });
                break;
            }
            case ADD_BOOKMARK_FAILURE:
                draft.addBookmarkLoading = false;
                draft.addBookmarkError = action.error;
                break;

            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS: {
                draft.likePostLoading = false;
                draft.likePostDone = true;
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers.push({ id: action.data.UserId });
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

            case UNLIKE_POST_SUCCESS: {
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
                draft.imagePaths = [];
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.error;
                break;

            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS:
                draft.loadPostLoading = false;
                draft.loadPostDone = true;
                draft.singlePost = action.data;
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;

            case LOAD_USER_BOOKMARKS_REQUEST:
            case LOAD_POSTS_REQUEST:
            case LOAD_HASHTAG_POSTS_REQUEST:
            case LOAD_USER_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;

            case LOAD_USER_BOOKMARKS_SUCCESS:
            case LOAD_POSTS_SUCCESS:
            case LOAD_HASHTAG_POSTS_SUCCESS:
            case LOAD_USER_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = draft.mainPosts.concat(action.data);
                draft.hasMorePosts = action.data.length === 10;
                break;
                
            case LOAD_USER_BOOKMARKS_FAILURE:
            case LOAD_POSTS_FAILURE:
            case LOAD_HASHTAG_POSTS_FAILURE:
            case LOAD_USER_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.error;
                break;
                
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS: {
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

            case UPLOAD_IMAGES_REQUEST:
                draft.uploadImagesLoading = true;
                draft.uploadImagesDone = false;
                draft.uploadImagesError = null;
            break;
            case UPLOAD_IMAGES_SUCCESS:
                draft.imagePaths = action.data;
                draft.uploadImagesLoading = false;
                draft.uploadImagesDone = true;
                break;
            case UPLOAD_IMAGES_FAILURE:
                draft.uploadImagesLoading = false;
                draft.uploadImagesError = action.error;
                break;

            case RETWEET_REQUEST:
                draft.retweetLoading = true;
                draft.retweetDone = false;
                draft.retweetError = null;
            break;
            case RETWEET_SUCCESS:
                draft.mainPosts.unshift(action.data);
                draft.retweetLoading = false;
                draft.retweetDone = true;
                break;
            case RETWEET_FAILURE:
                draft.retweetLoading = false;
                draft.retweetError = action.error;
                break;

            case REMOVE_IMAGE:
                draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
                break;
            default:
                break;
        }
    });
};

export default reducer;
