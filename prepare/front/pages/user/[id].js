/* eslint-disable react/react-in-jsx-scope */
import { END } from 'redux-saga';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';

const UserCard = styled(Card)`
 width: 100%;
 flex-direction: row;
`;

const CardBody = styled(Card.Body)`
    padding: 1.0rem;
`;
const CardLink = styled(Card.Link)`
    padding: 0;
    display:flex;
`;
const User = () => {
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
    const { userInfo } = useSelector((state) => state.user);
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1].id;
                    dispatch({
                    type: LOAD_USER_POSTS_REQUEST,
                    lastId,
                    data: id,
                });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
        window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]); 
    return (
        <AppLayout>
                  {userInfo
                  && ( 
                  <Head>
                      <title>
                    {userInfo.nickname}
                    님의 글
                      </title>
                <meta name = "description" content ={`${userInfo.nickname} 님의 게시글`}/>
                <meta property = "og:title" content ={`${userInfo.nickname} 님의 게시글`}/>
                <meta property = "og:description" content ={`${userInfo.nickname} 님의 게시글`}/>
                <meta property = "og:image" content ="https://localhost:3000/twitter.ico"/>
                <meta property = "og:url" content ={`https://localhost:3000/user/${id}`}/>
                  </Head>
                )}
                {userInfo && ( 
                    <UserCard>
                            <CardBody>
                                <Card.Title>{userInfo.nickname}</Card.Title>
                                <br/>
                                <div style={{ paddingTop: '15px', borderTop: '1px solid rgba(0, 0, 0, 0.125)', display: 'flex', textAlign: 'center' }}>
                                    <Link href= {`/user/${userInfo.id}`}><a><CardLink href="#">게시물 <br/>{userInfo.Posts}</CardLink></a></Link>
                                    <Link href="/profile"><a><CardLink href="#">팔로우 <br/>{userInfo.Followings}</CardLink></a></Link>
                                    <Link href="/profile"><a><CardLink href="#">팔로워 <br/>{userInfo.Followers}</CardLink></a></Link>
                                </div>
                            </CardBody>
                    </UserCard>
                )}
            {mainPosts && mainPosts.map((v) => <PostCard key={v.id} post = {v}/>)}
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
        type: LOAD_USER_POSTS_REQUEST,
        data: context.params.id,
    });
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: context.params.id,
    });
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default User;
