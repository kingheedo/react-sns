import React, { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import  Router  from 'next/router'
import AppLayout from '../components/AppLayout'
import FollowList from '../components/FollowList'
import NickNameEditForm from '../components/NickNameEditForm'
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user'
const Profile = () => {
    const {me} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        })
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        })
    }, [])
    useEffect(() => {
        if (!me){
            Router.push('/')
        }
    }, [me])
    if(!me) {
    return null;
    }
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm/>
                <FollowList header="팔로잉" data={me.Followings}/>
                <FollowList header="팔로워" data={me.Followers}/>
            </AppLayout>
        </>
    )
}

export default Profile
