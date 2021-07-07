import React, { useCallback } from 'react'
import {Button, Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { logoutRequestAction, LOG_OUT_REQUEST } from '../reducers/user'
const CardLinkWrapper = styled.div`
    padding-top : 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex !important
    
`
const LogoutButton = styled(Button)`
    margin-bottom: 15px;
`
const CardBody = styled(Card.Body)`
    padding: 1.0rem;
`
const CardLink = styled(Card.Link)`
    padding : 5px;
    display:flex;
    text-align : center;
    padding : 0 1.0rem;
`
const UserProfile = () => {
    
    const {me} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const logoutHandler = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(
                logoutRequestAction()
            );
        },
        [],
    )
    return (
        <Card style={{ width: '31rem', flexDirection: 'row' }}>
            <Card.Img variant="left" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" width='155' />
            <CardBody>
                <Card.Title>{me.nickname}</Card.Title>
                <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton>
                <br/>
                <CardLinkWrapper>
                    <CardLink href="#">게시글 수 <br/>{me.Posts.length}</CardLink>
                    <CardLink href="#">팔로잉 <br/>{me.Followings.length}</CardLink>
                    <CardLink href="#">팔로워 <br/>{me.Followers.length}</CardLink>
                </CardLinkWrapper>
                
            </CardBody>
        </Card>
    )
}

export default UserProfile
