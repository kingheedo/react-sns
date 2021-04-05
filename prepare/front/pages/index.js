import React from 'react'
import AppLayout from '../components/AppLayout'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
const Home = () => {
    const me = useSelector(state => state.user.me)
    const mainPosts = useSelector(state => state.post.mainPosts);
    return (
        <AppLayout>
            {me &&<PostForm me={me}/>}
            {mainPosts.map((post) =>  <PostCard key={post.id} post={post}/>)}
        </AppLayout>

    )
}

export default Home
