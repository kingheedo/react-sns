import React, { useCallback } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import moment from 'moment';
import { logoutRequestAction } from '../reducers/user';

const CardLinkWrapper = styled.div`
    padding-top : 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex !important
`;
const LogoutButton = styled(Button)`
    margin-bottom: 15px;
    background: #4088bc;
    color: #ffffff;
    &:hover{
        background: #0069d9;
    }
`;
const ProfileCard = styled(Card)`
    width: 26rem;
    flex-direction: row;
   @media screen and (max-width: 991px) { 
    width: 20rem;
   }
    
`;
const CardBody = styled(Card.Body)`
    padding: 1.0rem;
`;
const CardLink = styled(Card.Link)`
    padding: 0;
    display:flex;
    text-align : center;
`;
const MomentDiv = styled.div`
    float: right;
    margin-top: 15px;
`;
const UserProfile = () => {
    const { me } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const logoutHandler = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(
                logoutRequestAction(),
            );
        },
        [],
    );
    return (
        <ProfileCard>
            {/* <Card.Img variant="left" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" width='155' /> */}
            <CardBody>
                <Link href= {`/user/${me.id}`}><a><Card.Title>{me.nickname}</Card.Title></a></Link>
                <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton>
                <MomentDiv>
                    Joined {moment(me.createdAt).format('MMMM YYYY')}
                </MomentDiv>
                <br/>
                <CardLinkWrapper>
                    <Link href= {`/user/${me.id}`}><a><CardLink href="#">게시물 <br/>{me.Posts.length}</CardLink></a></Link>
                    <Link href="/profile"><a><CardLink href="#">팔로우 <br/>{me.Followings.length}</CardLink></a></Link>
                    <Link href="/profile"><a><CardLink href="#">팔로워 <br/>{me.Followers.length}</CardLink></a></Link>
                </CardLinkWrapper>
                
            </CardBody>
        </ProfileCard>
    );
};

export default UserProfile;
