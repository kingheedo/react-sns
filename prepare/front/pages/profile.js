import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import  Router  from 'next/router'
import AppLayout from '../components/AppLayout'
const Profile = () => {
    const {me} = useSelector(state => state.user)

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
                {/* <FollowList header="팔로잉"/>
                <FollowList header="팔로워"/> */}
            </AppLayout>
        </>
    )
}

export default Profile
