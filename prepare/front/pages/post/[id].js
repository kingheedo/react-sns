//post/1.js
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Head from 'next/head';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import PostCard from '../../components/PostCard';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
//post/2.js 등
const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const { singlePost } = useSelector((state) => state.post);
    return (
        <AppLayout>
            <Head>
                <link rel="shortcut icon" href="/twitter.ico" />
                <title>
                    {singlePost.User.nickname}
                    님의 글
                </title>
                
                <meta name = "description" content ={singlePost.content}/>
                <meta property = "og:title" content ={`${singlePost.User.nickname} 님의 게시글`}/>
                <meta property = "og:description" content ={singlePost.content}/>
                <meta property = "og:image" content ={singlePost.Images[0] ? singlePost.Images[0].src : 'https://localhost:3060/twitter.ico'}/>
                <meta property = "og:url" content ={`https://localhost:3060/post/${id}`}/>
            </Head>
            <PostCard post={singlePost}/>
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Post;
