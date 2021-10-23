/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useCallback, useMemo, useState } from 'react';
import { Card, Button, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Share, Heart, HeartFill, ChatDots, ThreeDots, Bookmark, BookmarkFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import moment from 'moment';
import styled from 'styled-components';
import { ADD_BOOKMARK_REQUEST, LIKE_POST_REQUEST, REMOVE_BOOKMARK_REQUEST, REMOVE_POST_REQUEST, RETWEET_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import EditPostContent from './EditPostContent';

moment.locale('ko');

const CommentList = styled(ListGroup)`
        a{
            text-decoration : none;
            color : #212529;
            font-weight: 500;
        },
        p{
            margin-top : 0.3rem
        }
    `;
const CommentListItem = styled(ListGroup.Item)`
        display:flex;
        margin-top : 1rem;
`;
const MoreButton = styled(Tooltip)`
        .tooltip-inner{
            border: 1px solid #f0f0f1;
            background-color: #f0f0f1;
        },
        .arrow::before {
            border-top-color: #f0f0f1;
        },
`;
const PostCard = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const id = useSelector((state) => state.user.me?.id);
    const { retweetError } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    // const cardHeader = styled(Card.Header)`
    // background : rgba(0,0,0,0);
    
    // `
    
    const headerStyle = useMemo(() => ({
        backgroundColor: 'rgba(0,0,0,0)',
    }), []);

    const ulStyle = useMemo(() => ({
        margin: 0,
        padding: 0,
        listStyle: 'none',
        borderTop: '1px solid #f0f0f0',
    }), []);

    const liStyle = useMemo(() => ({
        width: '25%',
        borderRight: '1px solid #f0f0f0',
        float: 'left',
        textAlign: 'center',
        margin: '12px 0',
    }), []);

    const spanStyle = useMemo(() => ({
        lineHeight: '14px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',

    }), []);
    
    const BookmarkStyle = useMemo(() => ({
        fontSize: '1.5rem',
        float: 'right',
        cursor: 'pointer',
        }), []);
    
    const onRetweet = useCallback(
        () => {
            if (!id) {
                return alert('로그인 후 이용하실 수 있습니다.');
            }
            dispatch({
                type: RETWEET_REQUEST,
                data: post.id,
            });
        },
        [id],
    );

    const onUnLike = useCallback(
        () => {
            if (!id) {
                return alert('로그인 후 이용하실 수 있습니다.');
            }
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            });
        },
        [id],
    );
    const onLike = useCallback(
        () => {
            if (!id) {
                return alert('로그인 후 이용하실 수 있습니다.');
            }
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id,
            });
        },
        [id],
    );
    
    const OnToggleComment = useCallback(
        () => {
            setCommentOpen((prev) => !prev);
        },
        [],
    );
    const onPostDelete = useCallback(
        (e) => {
            e.preventDefault();
            if (!id) {
                return alert('로그인 후 이용하실 수 있습니다.');
            }
            dispatch({
                type: REMOVE_POST_REQUEST,
                data: post.id,
            });
        },
        [post.id],
    );

    const OnBookmark = useCallback(
        () => {
            if (!id) {
                return alert('로그인 후 이용하실 수 있습니다.');
            }
            dispatch({
                type: ADD_BOOKMARK_REQUEST,
                data: post.id,
            });
        },
        [id],
    );
    const OnUnBookmark = useCallback(
        () => {
            if (!id) {
                return alert('로그인 후 이용하실 수 있습니다.');
            }
            dispatch({
                type: REMOVE_BOOKMARK_REQUEST,
                data: post.id,
            });
        },
        [id],
    );
    
    const handleModalForm = useCallback(
        (e) => {
            setShow((show) => !show);
        },
        [show],
    );

    const renderTooltip = () => (
        <MoreButton>
            
               <>
               {id && post.User.id === id && !post.Retweet
                 && <Button variant="warning" onClick={handleModalForm}>수정</Button>}
               {id && post.User.id === id
               && <Button variant="danger" onClick={onPostDelete}>삭제</Button>}
               </>
            
               {id && post.User.id !== id
                && <Button variant="danger">신고</Button>}
        </MoreButton>
        );
    const like = post.Likers.find((v) => v.id === id);

    const bookmark = post.Bookmarkers.find((v) => v.id === id);
    return (
        <div style={{ margin: '100px 0 20px' }}>
            <Card style={{ width: '100%' }}>
                <Card.Header style={headerStyle}>
                    {/* 아이디가 post의 userid와 같다면 안보이게 */}
                    {post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}

                    {id && post.User.id === id
                    ? null
                    : <FollowButton post = {post}/>}
                </Card.Header>
                <Card.Body style={{ padding: 0 }}>
                    {post.RetweetId && post.Retweet
                    ? (
<Card style={{ border: 0, width: '100%', display: 'inline-block', margin: '0.05rem' }}>
                        <div style={{ display: 'flex' }}>
                            {post.Retweet.Images[0] && <PostImages images = {post.Retweet.Images}/>}
                        </div>
                            <div style={{ width: '100%', padding: '24px' }}>
                                {bookmark 
                                ? <BookmarkFill style = {BookmarkStyle} onClick = {OnUnBookmark}/>
                                : <Bookmark style={BookmarkStyle} onClick={OnBookmark}/>}
                            
                                <Card.Title style={{ marginBottom: '2rem' }}>
                            <Link href= {`/user/${post.Retweet.User.id}`}>
                                <a>
                                    {/* <Image src="holder.js/171x180" roundedCircle /> */}{post.Retweet.User.nickname}
                                </a>
                            </Link>
                                </Card.Title>
                            <Card.Text>
                            <div style={{ float: 'right' }}>{moment(post.createdAt).fromNow()}</div>
                               {post.Likers.length >= 1 ? <h6 style={{ fontWeight: '600' }}>좋아요 {post.Likers.length}개</h6> : null}
                            <br/>
                            <PostCardContent postContent = {post.Retweet.content}/>
                            <div style ={{ marginTop: '1rem', display: 'flex' }}>
                                <h6>{post.Comments[0] && <Link href={`/user/${post.Comments[0].User.id}`}><a style={{ textDecoration: 'none', color: '#212529' }}>{post.Comments[0].User.nickname}</a></Link>}</h6>
                                &nbsp;
                                <p style={{ lineHeight: '1.2' }}>{post.Comments[0] && post.Comments[0].content}</p>
                            </div>
                            </Card.Text>

                            </div>

</Card>
)
                    : (
<Card style={{ border: 0, width: '100%', display: 'inline-block', margin: '0.05rem' }}>
                        <div style={{ display: 'flex' }}>
                            {post.Images[0] && <PostImages images = {post.Images}/>}
                        </div>
                            <div style={{ padding: '24px' }}>
                                {bookmark 
                                ? <BookmarkFill style = {BookmarkStyle} onClick = {OnUnBookmark}/>
                                : <Bookmark style={BookmarkStyle} onClick={OnBookmark}/>}
                                <Card.Title style={{ marginBottom: '2rem' }}>
                                <Link href= {`/user/${post.User.id}`}>
                                    {/* <Image src="holder.js/171x180" roundedCircle /> */}<a>{post.User.nickname}</a>
                                </Link>
                                </Card.Title>
                                <Card.Text>
                                    <div style={{ float: 'right' }}>
                                        {moment(post.createdAt).fromNow()}
                                    </div>
                                    <div>
                                        {post.Likers.length >= 1 ? <h6 style={{ fontWeight: '600' }}>좋아요 {post.Likers.length}개</h6> : null}
                                    </div>

                                    <br/>

                                    <PostCardContent postContent = {post.content}/>

                                    <div style ={{ marginTop: '1rem', display: 'flex' }}>
                                        <h6>{post.Comments[0] 
                                            && (
<Link href={`/user/${post.Comments[0].User.id}`}>
                                                <a style={{ textDecoration: 'none', color: '#212529' }}>{post.Comments[0].User.nickname}</a>
</Link>
)}
                                        </h6>
                                        &nbsp;
                                        <p style={{ lineHeight: '1.2' }}>{post.Comments[0] && post.Comments[0].content}</p>
                                    </div>
                                </Card.Text>

                            </div>
</Card>
                    
                    )}
                    <ul style={ulStyle}>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                            <Share style={{ width: '100%' }} onClick={onRetweet}/>
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                            {like
                                ? <HeartFill style={{ width: '100%', color: '#dc3545' }} onClick={onUnLike}/>
                                : <Heart style={{ width: '100%' }} onClick={onLike}/>}
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                                <ChatDots style={{ width: '100%' }} onClick={OnToggleComment}/>
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                                {show 
                                ? null
                                : (
<OverlayTrigger
  placement="top"
  overlay={renderTooltip}
  trigger="click"
>
                                    <ThreeDots style={{ width: '100%' }}/>
</OverlayTrigger>
)}    
                                
                            </span>
                        </li>
                    </ul>
                    
                </Card.Body>
            </Card>
            {commentOpen
            && (
<div style={{ width: '33rem' }}>
                <CommentForm post={post}/>
                <span>{post.Comments.length}개의 댓글</span>
                <CommentList variant="flush">
                    {post.Comments[0] && post.Comments.map((v) => (
                        <CommentListItem>
                            {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                            <Link href= {`/user/${v.User.id}`}><a>{v.UserId && v.User.nickname}</a></Link>
                            <p>{v.content}</p>
                        </CommentListItem>
                    ))}
                    
                </CommentList>
</div>
            )}
        <EditPostContent post={post} show={show} handleModalForm= {handleModalForm}/>
       
        </div>
    );
};
PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        Images: PropTypes.arrayOf(PropTypes.object),
        Comments: PropTypes.arrayOf(PropTypes.object),
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};
export default PostCard;
