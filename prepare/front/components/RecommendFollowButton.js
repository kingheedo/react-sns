import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';
import styled from 'styled-components';

const isFollowButton = styled(Button)`
    position: absolute; 
    z-index: 10;
    right: 1rem;
    top: 1.6rem;
`

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
            <isFollowButton  onClick={onClickButton}>
                {isFollowing ? '언팔로우' : '팔로우' }
            </isFollowButton>
    );
};
RecommendFollowButton.propTypes = {
    recommendUser: Proptypes.object.isRequired,
};
export default RecommendFollowButton;
