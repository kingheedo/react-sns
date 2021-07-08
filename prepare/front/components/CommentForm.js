import React,{useCallback, useEffect, useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import {addComment, ADD_COMMENT_REQUEST} from '../reducers/post'
import Link from 'next/link'
import Router from 'next/router'
const CommentForm = ({post}) => {
    const me = useSelector(state => state.user.me);
    const id = useSelector(state => state.user.me?.id);
    const nickname = useSelector(state => state.user.me?.nickname);
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
            if(!(me && me.id)){
            Router.push('/signup')
            }
            if(!me){
                return null;
            }
            dispatch({
                type: ADD_COMMENT_REQUEST,
                data: {content: commentText, postId: post.id, userId: id}
            })
        },
        [me,commentText,me && me.id],
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
