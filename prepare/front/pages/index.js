import React, { useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
import { LOAD_POSTS_REQUEST } from '../reducers/post'
import { LOAD_USER_REQUEST, LOG_IN_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore';
import { END } from 'redux-saga'
import axios from 'axios'
const Home = () => {
    const dispatch = useDispatch();
    const me = useSelector(state => state.user.me)
    const {retweetError} = useSelector(state => state.post)
    const {mainPosts,hasMorePosts,loadPostLoading} = useSelector(state => state.post);
    
        useEffect(() => {
        if(retweetError){
            return alert(retweetError)
        }
    }, [retweetError])
    useEffect(() => {
        function onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                if(hasMorePosts && !loadPostLoading){
                    const lastId = mainPosts[mainPosts.length - 1].id
                    dispatch({
                    type: LOAD_POSTS_REQUEST,
                    lastId
                })
                }
                
            }
        }
        window.addEventListener('scroll',onScroll);
        return () => {
        window.removeEventListener('scroll',onScroll)
        }
    }, [hasMorePosts,  loadPostLoading, mainPosts])
    
    return (
        <AppLayout>
            {me &&<PostForm me={me}/>}
            {mainPosts.map((post) =>  <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if(cookie && context.req){
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_USER_REQUEST
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

export default Home
