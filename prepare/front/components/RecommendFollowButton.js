import React, { useCallback } from 'react';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = styled(Button)`
    position: absolute;
    right: 1rem;
    top: 1.7rem;
    z-index: 100;
    background: #4088BC;
    &:hover{
    background: #0069d9;
    }
`;

const RecommendFollowButton = ({ recommendUser }) => {
    const { me } = useSelector((state) => state.user);
    const isFollowing = me && me.Followings.find((v) => v.id === recommendUser.id);
    const dispatch = useDispatch();

    const onClickButton = useCallback(
        () => {
            if (isFollowing) {
                dispatch({
                    type: UNFOLLOW_REQUEST,
                    data: recommendUser.id,
                });
            } else {
                dispatch({
                    type: FOLLOW_REQUEST,
                    data: recommendUser.id,
                });
            }
        },
        [isFollowing, recommendUser],
    ); 
    return (
            <FollowButton onClick={onClickButton}>
                {isFollowing ? '언팔로우' : '팔로우' }
            </FollowButton>
    );
};
RecommendFollowButton.propTypes = {
    recommendUser: Proptypes.object.isRequired,
};
export default RecommendFollowButton;
