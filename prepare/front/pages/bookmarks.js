import { END } from 'redux-saga';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import wrapper from '../store/configureStore';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';
import { LOAD_USER_BOOKMARKS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Bookmark = () => {
    const dispatch = useDispatch();
    const { mainPosts, hasMorePosts, loadPostsLoading, loadPostsError } = useSelector((state) => state.post);
    const { me } = useSelector((state) => state.user);
        useEffect(() => {
        if (!me) {
            alert('로그인이 필요합니다');
            Router.push('/');
        }
    }, [me]);
    
    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1].id;
                dispatch({
                    type: LOAD_USER_BOOKMARKS_REQUEST,
                    lastId,
                });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
        window.removeEventListener('scroll', onScroll);
        };
    }, [hasMorePosts, loadPostsLoading, mainPosts]);

    return (
        <AppLayout>
            {mainPosts && mainPosts.map((v) => v.Bookmarkers.length >= 1 && <PostCard post = {v}/>)}
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
        type: LOAD_USER_BOOKMARKS_REQUEST,
    });
    
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Bookmark;
