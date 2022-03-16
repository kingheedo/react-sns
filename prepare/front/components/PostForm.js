import React, { useCallback, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ADD_POST_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
import useInput from '../hooks/useInput';
import { backUrl } from '../config/config';

const UploadButton = styled(Button)`
 margin-top: 1rem;
`;
const PostButton = styled(Button)`
 float: right;
 margin-top: 1rem;
`;
const ImaegPathDiv = styled.div`
 display: flex; 
 margin-top: 20px;
`;
const ImageDiv = styled.div`
  margin-rght: 5px
`;

const PostForm = () => {
    const { addPostDone, imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageUpload = useRef();
    const [text, onChangeText, setText] = useInput('');
    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);
    const onClickImageUpload = useCallback(
        (e) => {
            e.preventDefault();
            imageUpload.current.click();
        },
        [imageUpload.current],
    );
    const onSumbitUpload = useCallback(
        (e) => {
            e.preventDefault();
            if (!text || !text.trim()) {
                return alert('게시글을 작성하세요');
            }
            const formData = new FormData();
            imagePaths.forEach((p) => {
            formData.append('image', p);
            });
            formData.append('content', text);
            dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
            });
        },
        [text, imagePaths],
    );
    const onChangeImages = useCallback(
        (e) => {
            console.log('images', e.target.files);
            const imageFormData = new FormData();
            [].forEach.call(e.target.files, (f) => {
                imageFormData.append('image', f);
            });
            dispatch({
                type: UPLOAD_IMAGES_REQUEST,
                data: imageFormData,
            });
        },
        [],
    );
    const onRemoveImage = useCallback(
        (index) => () => {
           dispatch({
               type: REMOVE_IMAGE,
               data: index,
           }); 
        },
        [],
    );
    return (
        <Form onSubmit={onSumbitUpload} encType="multipart/form-data">
            <div>
            <Form.Group>
                <Form.Label ><h2>Home</h2></Form.Label>
                <Form.Control as="textarea" rows={3} value={text} onChange={onChangeText} />
                    <Form.File.Input type="file" name="image" ref={imageUpload} onChange={onChangeImages} multiple hidden />
                    <UploadButton onClick = {onClickImageUpload}>이미지업로드</UploadButton>
                    <PostButton type="submit" >게시</PostButton>
            </Form.Group>
            </div>
            <ImaegPathDiv>
                {imagePaths.map((v, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ImageDiv key={i}>
                        <img src={`${backUrl}/${v}`} alt={v} style= {{ width: '220px' }}/>
                        <div>
                            <Button onClick={onRemoveImage(i)}>제거</Button>
                        </div>
                    </ImageDiv>
                ))}
            </ImaegPathDiv>
        </Form>
        
    );
};

export default PostForm;
