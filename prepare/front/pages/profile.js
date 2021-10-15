import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import  Router  from 'next/router';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NickNameEditForm from '../components/NickNameEditForm';
import {LOAD_MY_INFO_REQUEST,  } from '../reducers/user';
import axios from 'axios';
import wrapper from '../store/configureStore';
import {END} from 'redux-saga';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url, {withCredentials: true}).then((result) => result.data)
const Profile = () => {
    const {me} = useSelector(state => state.user)

    const dispatch = useDispatch()

    const {data: followersData, error: followerError, mutate: mutateFollower} = useSWR('http://localhost:3065/user/followers', fetcher)
    const {data: followingsData, error: followingError,mutate: mutateFollowing} = useSWR('http://localhost:3065/user/followings', fetcher)
        
    
    useEffect(() => {
        if(!me){
            alert('로그인이 필요합니다')
            Router.push('/')
        }
    }, [me])
    
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm/>
                <FollowList header="팔로잉" mutate ={mutateFollowing} data={followingsData}/>
                <FollowList header="팔로워" mutate ={mutateFollower}   data={followersData}/>
            </AppLayout>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if(context.req && cookie){
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST
    });
    // context.store.dispatch({
    //     type: LOAD_FOLLOWERS_REQUEST,
    // });
    // context.store.dispatch({
    //     type: LOAD_FOLLOWINGS_REQUEST,
    // });
   
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})
export default Profile
