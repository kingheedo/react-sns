import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const isFollowing = me?.Followings.find((v) => v.id === post.User.id); 
    const onClickButton = useCallback(() => {
            if (isFollowing) {
                dispatch({
                    type: UNFOLLOW_REQUEST,
                    data: post.User.id,
                });
            } else {
                    dispatch({
                        type: FOLLOW_REQUEST,
                        data: post.User.id,
                    });
                }
        }, [isFollowing]);
    return (
    <Button onClick= {onClickButton} style={{ float: 'right' }} variant="outline-primary">
        {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
    
    );
};

FollowButton.propTypes = {
        post: PropTypes.object.isRequired,
};
export default FollowButton;
