import React,{useCallback, useEffect, useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import {addComment} from '../reducers/post'
const CommentForm = ({post}) => {
    const {id} = useSelector(state => state.user.me);
    const {nickname} = useSelector(state => state.user.me);
    const {addCommentLoading} = useSelector(state => state.post);
    const dispatch = useDispatch();
    const [commentText, OnChangeCommentText,setCommentText] = useInput('')
    const {addCommentDone} = useSelector(state => state.post)

    useEffect(() => {
        if(addCommentDone)
        setCommentText('')
    }, [addCommentDone])
    const onSubmitComment = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(addComment({
                content: commentText,
                postId: post.id,
                User:{
                    userId: id,
                    userNickname: nickname,
                }
            }))
        },
        [commentText],
    )
    return (
        <>
            <Form onSubmit={onSubmitComment}>
                <Form.Group style={{position:'relative'}} controlId="exampleForm.ControlTextarea1">
                    <Form.Label srOnly>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} value={commentText} onChange={OnChangeCommentText}/>
                </Form.Group>
                <Button disabled={addCommentLoading} style={{position:'absolute', right:0,}} variant="primary" type="submit">
                {addCommentLoading ? 'Loading…' : '게시'}
                </Button>
            </Form>
            
        </>
    )
}
CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}
export default CommentForm
