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
import useInput from '../hooks/useInput';
import Report from './Report';

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
const CardDiv = styled.div`
         margin: 100px 0 20px
`;
const ImageDiv = styled.div`
        display: flex;
`;
const CardInner = styled.div`
        width: 100%; 
        padding: 24px;
`;
const MomentDiv = styled.div`
        float: right;
`;
const PostComment = styled.div`
        margin-top: 1rem; 
        display: flex;
`;
const Anchor = styled.a`
text-decoration: none; 
color: #212529;
`;
const P = styled.p`
 line-height: 1.2;
`;
const H6 = styled.h6`
 font-Weight: 600'
`;
const CardTitle = styled(Card.Title)`
  margin-bottom: 2rem
`;

const PostCard = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const id = useSelector((state) => state.user.me?.id);
    const { retweetError } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

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

    const CardStyle = useMemo(() => ({
        width: '100%',
    }), []);

    const CardBody = useMemo(() => ({
        padding: '0',
    }), []);

    const RetweetCard = useMemo(() => ({
        border: '0', 
        width: '99%',
        display: 'inline-block',
        margin: '0.05rem',
    }), []);

    const TweetCard = useMemo(() => ({
        border: '0', 
        width: '99%', 
        display: 'inline-block',
        margin: '0.05rem',
    }), []);

    const CardIcon = useMemo(() => ({
        width: '100%',
    }), []);
    const HeartFillIcon = useMemo(() => ({
        width: '100%',
        color: '#dc3545',
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
        () => {
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
    
    const renderTooltip = (props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MoreButton id="button-tooltip" {...props}>
            
               <>
               {id && post.User.id === id && !post.Retweet
                 && <Button variant="warning" onClick={handleModalForm}>수정</Button>}
               {id && post.User.id === id
               && <Button variant="danger" onClick={onPostDelete}>삭제</Button>}
               </>
            
               {((id && post.User.id !== id) || !id)
                && <Button variant="danger" onClick={handleModalForm}>신고</Button>}
        </MoreButton>
        );
    const like = post.Likers.find((v) => v.id === id);

    const bookmark = post.Bookmarkers.find((v) => v.id === id);
    return (
        <CardDiv>
            <Card style={CardStyle}>
                <Card.Header style={headerStyle}>
                    {/* 아이디가 post의 userid와 같다면 안보이게 */}
                    {post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}

                    {id && post.User.id === id
                    ? null
                    : <FollowButton post = {post}/>}
                </Card.Header>
                <Card.Body style={CardBody}>
                    {post.RetweetId && post.Retweet
                    ? (
                        <Card style={RetweetCard}>
                            <ImageDiv>
                                {post.Retweet.Images[0] && <PostImages postid={post.id} header = "메인이미지" images = {post.Retweet.Images}/>}
                            </ImageDiv>
                            <CardInner>
                                {bookmark 
                                ? <BookmarkFill style = {BookmarkStyle} onClick = {OnUnBookmark}/>
                                : <Bookmark style={BookmarkStyle} onClick={OnBookmark}/>}
                            
                                <CardTitle>
                                    <Link href= {`/user/${post.Retweet.User.id}`}>
                                        <a>
                                            {/* <Image src="holder.js/171x180" roundedCircle /> */}{post.Retweet.User.nickname}
                                        </a>
                                    </Link>
                                </CardTitle>
                                <Card.Text>
                                    <MomentDiv>{moment(post.createdAt).fromNow()}</MomentDiv>
                                    {post.Likers.length >= 1 ? <H6>좋아요 {post.Likers.length}개</H6> : null}
                                    <br/>
                                    <PostCardContent postContent = {post.Retweet.content}/>
                                    <PostComment>
                                        <h6>{post.Comments[0] && <Link href={`/user/${post.Comments[0].User.id}`}><Anchor>{post.Comments[0].User.nickname}</Anchor></Link>}</h6>
                                        &nbsp;
                                        <P>{post.Comments[0] && post.Comments[0].content}</P>
                                    </PostComment>
                                </Card.Text>
                            </CardInner>
                        </Card>
                        )
                        : (
                        <Card style={TweetCard}>
                        <ImageDiv>
                            {post.Images[0] && <PostImages postid={post.id} header = "메인이미지" images = {post.Images}/>}
                        </ImageDiv>
                            <CardInner>
                                {bookmark 
                                ? <BookmarkFill style = {BookmarkStyle} onClick = {OnUnBookmark}/>
                                : <Bookmark style={BookmarkStyle} onClick={OnBookmark}/>}
                                <CardTitle>
                                <Link href= {`/user/${post.User.id}`}>
                                    {/* <Image src="holder.js/171x180" roundedCircle /> */}<a>{post.User.nickname}</a>
                                </Link>
                                </CardTitle>
                                <Card.Text>
                                    <MomentDiv>
                                        {moment(post.createdAt).fromNow()}
                                    </MomentDiv>
                                        {post.Likers.length >= 1 ? <H6>좋아요 {post.Likers.length}개</H6> : null}
                                    <br/>
                                    <PostCardContent postContent = {post.content}/>

                                    <PostComment>
                                        <h6>{post.Comments[0] 
                                            && (
                                <Link href={`/user/${post.Comments[0].User.id}`}>
                                                <Anchor>{post.Comments[0].User.nickname}</Anchor>
                                </Link>
                                )}
                                        </h6>
                                        &nbsp;
                                        <P>{post.Comments[0] && post.Comments[0].content}</P>
                                    </PostComment>
                                </Card.Text>
                            </CardInner>
                        </Card>
                    )}
                    <ul style={ulStyle}>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                            <Share style={CardIcon} onClick={onRetweet}/>
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                            {like
                                ? <HeartFill style={HeartFillIcon} onClick={onUnLike}/>
                                : <Heart style={CardIcon} onClick={onLike}/>}
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                                <ChatDots style={CardIcon} onClick={OnToggleComment}/>
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
                                        <ThreeDots style={CardIcon}/>
                                    </OverlayTrigger>
                                    )}    
                                
                            </span>
                        </li>
                    </ul>
                    
                </Card.Body>
            </Card>
            {commentOpen
            && (
                <div>
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
        {id && post.User.id === id 
            ? <EditPostContent post={post} show={show} handleModalForm= {handleModalForm}/>
            : <Report post={post} show={show} handleModalForm= {handleModalForm}/>}
       
        </CardDiv>
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
