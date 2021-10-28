/* eslint-disable react/react-in-jsx-scope */
import { END } from 'redux-saga';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';

const Hashtag = () => {
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
    const router = useRouter();
    const { tag } = router.query;
    const dispatch = useDispatch();
    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1].id;
                    dispatch({
                    type: LOAD_HASHTAG_POSTS_REQUEST,
                    lastId,
                    data: tag,
                });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
        window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts.length, hasMorePosts, tag, loadPostsLoading]); 
    return (
        <AppLayout>
                {mainPosts && mainPosts.map((v) => (<PostCard key={v.id} post = {v}/>))}
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
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: context.params.tag,
    });
    
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Hashtag;
