import React, { useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
import { LOAD_POSTS_REQUEST } from '../reducers/post'
import { LOAD_USER_REQUEST, LOG_IN_REQUEST } from '../reducers/user'
const Home = () => {
    const dispatch = useDispatch();
    const me = useSelector(state => state.user.me)
    const {mainPosts,hasMorePosts,loadPostLoading} = useSelector(state => state.post);
    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST,
        })
    }, [])
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        })
    }, [])

    useEffect(() => {
        function onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                if(hasMorePosts && !loadPostLoading){
                    dispatch({
                    type: LOAD_POSTS_REQUEST,
                })
                }
                
            }
        }
        window.addEventListener('scroll',onScroll);
        return () => {
        window.removeEventListener('scroll',onScroll)
        }
    }, [hasMorePosts, loadPostLoading])
    
    return (
        <AppLayout>
            {me &&<PostForm me={me}/>}
            {mainPosts.map((post) =>  <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}

export default Home
