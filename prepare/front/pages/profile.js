import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import  Router  from 'next/router'
import AppLayout from '../components/AppLayout'
const Profile = () => {
    const {me} = useSelector(state => state.user)

    useEffect(() => {
        if(!(me && me.id )){
            Router.push('/')
        }
    }, [me && me.id])
    if(!me) {
    return null;
    }
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <div>팔로워</div>
                <div>팔로잉</div>
            </AppLayout>
        </>
    )
}

export default Profile
