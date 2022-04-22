import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const IsFollowButton = styled(Button)`
 float: right;
 color: #ffffff;
 background: #4088bc;
    &:hover{
    background: #0069d9;
  }
`;

const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
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
    <IsFollowButton onClick= {onClickButton} variant="outline-primary">
        {isFollowing ? '언팔로우' : '팔로우'}
    </IsFollowButton>
    
    );
};

FollowButton.propTypes = {
        post: PropTypes.object.isRequired,
};
export default FollowButton;
