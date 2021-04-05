import React, { useCallback, useEffect, useRef } from 'react'
import {Form,Button} from 'react-bootstrap';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import { addPostRequestAction } from '../reducers/post';
import useInput from '../hooks/useInput';

const PostForm = ({me}) => {
    const {addPostDone} = useSelector(state => state.post)
    const dispatch = useDispatch()
    const imageUpload = useRef()
    const [content,onChangeContent,setContent] = useInput('')
    useEffect(() => {
        if(addPostDone){
            setContent('')
        }
        
    }, [addPostDone])
    const onClickImageUpload = useCallback(
        (e) => {
            e.preventDefault();
            imageUpload.current.click();
        },
        [imageUpload.current],
    )
    const onSumbitUpload = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(addPostRequestAction(content))
            
        },
        [content],
    )
    return (
        <Form onSubmit={onSumbitUpload} encType="multipart/form-data">
            <Form.Group>
                <Form.Label>게시물 작성하기</Form.Label>
                <Form.Control as="textarea" rows={3} value={content} onChange={onChangeContent} />
                    <Button style={{float: 'right', marginTop: '1rem'}} type="submit" >게시</Button>
                    <Form.File.Input ref={imageUpload} multiple hidden />
                    <Button style={{float: 'left', marginTop: '1rem'}}  onClick = {onClickImageUpload}>이미지업로드</Button>
            </Form.Group>
            
        </Form>
    )
}

export default PostForm
