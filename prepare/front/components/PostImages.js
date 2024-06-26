import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { XSquareFill } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { DELETE_POST_IMAGE_REQUEST } from '../reducers/post';
import ImagesZoom from './ImagesZoom';
import { backUrl } from '../config/config';

const CardImg1 = styled(Card.Img)`
    width: 100%;
`;
const CardImg2 = styled(Card.Img)`
    width: 50%;
`;
const XSquare1 = styled(XSquareFill)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
    color: red;
    background-color: black; 
    cursor: pointer;
`;
const XSquare2 = styled(XSquareFill)`
    position: absolute;
    top: 0;
    right: 50%; 
    font-size: 28px;
    color: red;
    background-color: black;
    cursor: pointer;
`;

const PostImages = ({ images, header, postid }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const [selectImage1, setSelectImage1] = useState(false);
    const [selectImage2, setSelectImage2] = useState(false);
    const dispatch = useDispatch();
    const { deletePostImageLoading } = useSelector((state) => state.post);
    const onZoom = useCallback(
        (e) => {
            e.preventDefault();
            setShowImagesZoom(true);
        },
        [],
    );
    const onClose = useCallback(
        (e) => {
            e.preventDefault();
            setShowImagesZoom(false);
        },
        [],
    );
   
    const onDeleteImage = useCallback(
    (imageid, postid) => () => {
        dispatch({
              type: DELETE_POST_IMAGE_REQUEST,
              data: { imageId: imageid, postId: postid },
          });
        },
      [],
    );
    const handleDeleteImage = useCallback(
    (e) => {
        if (e.target.id === images[0].id.toString(10) && !selectImage1) {
            e.target.style.border = '0.5rem solid red';
            setSelectImage1((prev) => !prev);
        } else if (e.target.id === images[0].id.toString(10) && selectImage1) {
            e.target.style.border = 'none';
            setSelectImage1((prev) => !prev);
        } else if (e.target.id === images[1].id.toString(10) && !selectImage2) {
            e.target.style.border = '0.5rem solid red';
            setSelectImage2((prev) => !prev);
        } else if (e.target.id === images[1].id.toString(10) && selectImage2) {
            e.target.style.border = 'none';
            setSelectImage2((prev) => !prev);
        }
    },

       [selectImage1, selectImage2, images],

    );
    if (images.length === 1) {
        return (
            <>
            { 
            header === '수정'
            && (
            <>
                <CardImg1 id ={images[0].id} onClick = {handleDeleteImage} variant="top" alt={images[0].src.replace(/\/thumb\//, '/original/')} src={`${images[0].src.replace(/\/thumb\//, '/original/')}`} />
                {selectImage1 && <XSquare1 onClick={!deletePostImageLoading && onDeleteImage(images[0].id, postid)}>Delete</XSquare1>}
            </>
                )

            }
            {header === '메인이미지' 
            && (
            <>
            <CardImg1 variant="top" alt={images[0].src.replace(/\/thumb\//, '/original/')} src={`${images[0].src.replace(/\/thumb\//, '/original/')}`} onClick={onZoom} />
                 {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
                )}
            </>
        );
    }
    if (images.length === 2) {
        return (
            <>  
            {header === '수정'
                && (
            <>
                    <CardImg2 id ={images[0].id} onClick = {handleDeleteImage} variant="top" alt={images[0].src.replace(/\/thumb\//, '/original/')} src={`${images[0].src.replace(/\/thumb\//, '/original/')}`} />
                    <CardImg2 id ={images[1].id} onClick = {handleDeleteImage} variant="top" alt={images[1].src.replace(/\/thumb\//, '/original/')} src={`${images[1].src.replace(/\/thumb\//, '/original/')}`} />
                    {selectImage1 && <XSquare2 onClick={!deletePostImageLoading && onDeleteImage(images[0].id, postid)}>Delete</XSquare2>}
                    {selectImage2 && <XSquare1 onClick={!deletePostImageLoading && onDeleteImage(images[1].id, postid)}>Delete</XSquare1>}
            </>
            )}
            
            {header === '메인이미지'
                && (
            <>
                <CardImg2 variant="top" alt={images[0].src.replace(/\/thumb\//, '/original/')} src={`${images[0].src.replace(/\/thumb\//, '/original/')}`} onClick={onZoom}/>
                <CardImg2 variant="top" alt={images[1].src.replace(/\/thumb\//, '/original/')} src={`${images[1].src.replace(/\/thumb\//, '/original/')}`} onClick={onZoom}/>
                   {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
            )}
            </>
                );
            }

            return (
                <>
            { 
            header === '수정' 
            && (
            <>
                <CardImg1 id ={images[0].id} onClick = {handleDeleteImage} variant="top" alt={images[0].src.replace(/\/thumb\//, '/original/')} src={`${images[0].src.replace(/\/thumb\//, '/original/')}`} />
                {selectImage1 && <XSquare1 onClick={!deletePostImageLoading && onDeleteImage(images[0].id, postid)}>Delete</XSquare1>}
            </>
            )

            }
            {header === '메인이미지'
            && (
            <>
            <CardImg1 variant="top" alt={images[0].src.replace(/\/thumb\//, '/original/')} src={`${images[0].src.replace(/\/thumb\//, '/original/')}`} onClick={onZoom} />
                 {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
            )}
                </>
    );
            };
PostImages.propTypes = {
    images: Proptypes.arrayOf(Proptypes.object).isRequired,
    header: Proptypes.string.isRequired,
    postid: Proptypes.number.isRequired,
};
export default PostImages;
