import React, { useCallback, useEffect, useRef } from 'react'
import {Form,Button} from 'react-bootstrap';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import { addPostRequestAction ,UPLOAD_IMAGES_REQUEST } from '../reducers/post';
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
    const onChangeImages = useCallback(
        (e) => {
            console.log('images', e.target.files);
            const imageFormData = new FormData();
            [].forEach.call(e.target.files, (f) => {
                imageFormData.append('image', f);
            });
            dispatch({
                type: UPLOAD_IMAGES_REQUEST,
                data: imageFormData
            })
        },
        [],
    )
    return (
        <Form onSubmit={onSumbitUpload} encType="multipart/form-data">
            <Form.Group>
                <Form.Label>게시물 작성하기</Form.Label>
                <Form.Control as="textarea" rows={3} value={content} onChange={onChangeContent} />
                    <Button style={{float: 'right', marginTop: '1rem'}} type="submit" >게시</Button>
                    <Form.File.Input type="file" name="image" ref={imageUpload} onChange={onChangeImages} multiple hidden />
                    <Button style={{float: 'left', marginTop: '1rem'}}  onClick = {onClickImageUpload}>이미지업로드</Button>
            </Form.Group>
            
        </Form>
    )
}

export default PostForm
