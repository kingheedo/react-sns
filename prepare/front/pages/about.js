import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';
import AppLayout from '../components/AppLayout';

const CardLinkWrapper = styled.div`
    padding-top : 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex !important
    
`;

const CardBody = styled(Card.Body)`
    padding: 1.0rem;
`;
const CardLink = styled(Card.Link)`
    padding : 5px;
    display:flex;
    text-align : center;
    padding : 0 1.0rem;
`;
const About = () => {
    const { userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <AppLayout>
            <Card style={{ width: '31rem', flexDirection: 'row' }}>
                <CardBody>
                    <Card.Title>{userInfo.nickname}</Card.Title>
                    <br/>
                    <CardLinkWrapper>
                        <CardLink href="#">게시글 수 <br/>{userInfo.Posts}</CardLink>
                        <CardLink href="#">팔로잉 <br/>{userInfo.Followings}</CardLink>
                        <CardLink href="#">팔로워 <br/>{userInfo.Followers}</CardLink>
                    </CardLinkWrapper>
                    
                </CardBody>
            </Card>
        </AppLayout>
    );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: 2,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    });

export default About;
