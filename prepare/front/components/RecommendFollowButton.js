import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

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
            <Button style={{ position: 'absolute', zIndex: '10', right: '1rem', top: '1.6rem' }} onClick={onClickButton}>
                {isFollowing ? '언팔로우' : '팔로우' }
            </Button>
    );
};
RecommendFollowButton.propTypes = {
    recommendUser: Proptypes.object.isRequired,
};
export default RecommendFollowButton;
