import React, { useCallback } from 'react'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {FOLLOW_REQUEST, UNFOLLOW_REQUEST} from '../reducers/user'
const FollowButton = ({post}) => {
    const dispatch = useDispatch()
    const {me} = useSelector(state => state.user)
    const {followLoading,unfollowLoading} = useSelector(state => state.user)
    const isFollowing = me && me.Followings.find((v) => v.id === post.User.id) 
    const onClickButton = useCallback(() => {
            if(isFollowing){
                dispatch({
                    type: UNFOLLOW_REQUEST,
                    data: post.User.id
                })
            }
                else{
                    dispatch({
                        type: FOLLOW_REQUEST,
                        data: post.User.id
                    })
                }
            
        },[isFollowing]
    )
    return (
    <Button  onClick= {onClickButton} style={{float:'right',}} variant="outline-primary">
        {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
    
    )
}

FollowButton.propTypes = {
        post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        Images: PropTypes.arrayOf(PropTypes.object),
        Comments: PropTypes.arrayOf(PropTypes.object),
        content: PropTypes.string,
        createdAt: PropTypes.object,
    }).isRequired,
}
export default FollowButton
