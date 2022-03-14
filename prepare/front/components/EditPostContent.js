/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useCallback } from 'react';
import { Card, FormControl, Modal, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import PostImages from './PostImages';
import useInput from '../hooks/useInput';
import { EDIT_POST_CONTENT_REQUEST } from '../reducers/post';
import styled from 'styled-components';
const ModalCard = styled(Card)`
 border: 0;
 width: 100%;
 display: inline-block;
 margin: 0.05rem;
`
const ModalDiv1 = styled.div`
 position: relative;
`
const ModalDiv2 = styled.div`
 padding: 24px;
`
const CartTitle = styled(Card.Title)`
  margin-bottom: 2rem;
`
const ModalButton = styled(Button)`
 float: right;
`
const EditPostContent = ({ post, show, handleModalForm }) => {
    const [text, onChangeText] = useInput(post?.content);
    const dispatch = useDispatch();
    const onSubmitEdit = useCallback(
      (e) => {
        e.preventDefault();
        handleModalForm();
        dispatch({
                type: EDIT_POST_CONTENT_REQUEST,
                data: { postId: post.id, contentText: text },
            });
      },
      [post.id, text],
    );
    
    return (
        <>
             <Modal
               show={show}
               onHide={handleModalForm}
               aria-labelledby="Edit Content"
             >
              <Modal.Header closeButton>
                <Modal.Title id="eEdit Content">
                  Edit Content
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <ModalCard>
                    <ModalDiv1>
                          {post.Images[0] && <PostImages header = "수정" postid = {post.id} images = {post.Images}/>}
                    </ModalDiv1>
                    <ModalDiv2>
                        
                        <CartTitle>
                        <Link href= {`/user/${post.User.id}`}>
                            {/* <Image src="holder.js/171x180" roundedCircle /> */}<a>{post.User.nickname}</a>
                        </Link>
                        </CartTitle>
                        <Card.Text>
                            <br/>
                            <FormControl as="textarea" rows={3} value={text} onChange={onChangeText} />
                        </Card.Text>
                    </ModalDiv2>
                  </ModalCard>
                  <ModalButton onClick={onSubmitEdit} variant="primary" >수정</ModalButton>
              </Modal.Body>
             </Modal>
        </>
    );
};
EditPostContent.propTypes = {
  post: propTypes.object.isRequired,
  show: propTypes.bool.isRequired,
  handleModalForm: propTypes.func.isRequired,
};
export default EditPostContent;
