import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {Card,Button,Image,ListGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {Share,Heart,HeartFill,ChatDots,ThreeDots} from 'react-bootstrap-icons'
import { useSelector,useDispatch } from 'react-redux'
import { LIKE_POST_REQUEST, removePostRequestAction, REMOVE_POST_REQUEST, RETWEET_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post'
import { removePostOfMeAction } from '../reducers/user'
import CommentForm from './CommentForm'
import PostCardContent from './PostCardContent'
import PostImages from './PostImages'
import PropTypes from 'prop-types'
import FollowButton from './FollowButton'
import Link from 'next/link'






const PostCard = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const id = useSelector(state => state.user.me?.id)
    const {retweetError} = useSelector(state => state.post)
    const dispatch = useDispatch();
    // const cardHeader = styled(Card.Header)`
    // background : rgba(0,0,0,0);
    
    // `
    const headerStyle = useMemo(() => ({
        backgroundColor: 'rgba(0,0,0,0)'
    }),[])

    const ulStyle = useMemo(() => ({
        margin:0,
        padding:0,
        listStyle:'none',
        borderTop: '1px solid #f0f0f0',
    }),[])

    const liStyle = useMemo(() => ({
        width:'25%',
        borderRight: '1px solid #f0f0f0',
        float: 'left',
        textAlign: 'center',
        margin:'12px 0',
    }),[])

    const spanStyle = useMemo(() => ({
        lineHeight: '14px',
        cursor:'pointer',
        width:'100%',
        fontSize:"16px"

    }),[])
    
    

    
    const onRetweet = useCallback(
        () => {
            if(!id){
                return alert('로그인 후 이용하실 수 있습니다.')
            }
            dispatch({
                type: RETWEET_REQUEST,
                data: post.id
            })
        },
        [id],
    )

    const onUnLike = useCallback(
        () => {
            if(!id){
                return alert('로그인 후 이용하실 수 있습니다.')
            }
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id
            })
        },
        [id],
    )
    const onLike = useCallback(
        () => {
            if(!id){
                return alert('로그인 후 이용하실 수 있습니다.')
            }
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id
            });
        },
        [id],
    )
    
    const OnToggleComment = useCallback(
        () => {
            setCommentOpen((prev)=>!prev)
        },
        [],
    )
    const onPostDelete = useCallback(
        (e) => {
            e.preventDefault()
            if(!id){
                return alert('로그인 후 이용하실 수 있습니다.')
            }
            dispatch({
                type: REMOVE_POST_REQUEST,
                data: post.id
            })
           
        },
        [post.id],
    )
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {id && post.User.id === id 
            ? (
               <>
                 <Button  variant="warning">수정</Button>
                <Button variant="danger" onClick={onPostDelete}>삭제</Button>
               </>
            )
        :
                <Button variant="danger">신고</Button>
        }
        </Tooltip>
        );
    const like = post.Likers.find((v) => v.id === id);
    return (
        <div style={{margin: '100px 0 20px',}}>
            <Card style={{ width: '33rem',}}>
                <Card.Header style={headerStyle}>
                    {/* 아이디가 post의 userid와 같다면 안보이게 */}
                    {id && post.User.id === id
                    ? null
                    : <FollowButton post = {post}/>
                    }
                </Card.Header>
                <div style={{display:'flex'}}>
                    {post.Images[0] && <PostImages  images = {post.Images}/>}
                </div>
                <Card.Body style={{padding:0}}>
                    {post.RetweetId && post.Retweet
                    ?
                    (<Card style={{ width: '31rem', display:'inline-block',margin:'0.9rem' }}>
                        <Card.Header style={headerStyle}>
                            {post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}
                        </Card.Header>
                        <div style={{display:'flex'}}>
                            {post.Retweet.Images[0] && <PostImages  images = {post.Retweet.Images}/>}
                            </div>
                            <div style={{padding:'24px'}}>
                            <Link href= {`/user/${post.Retweet.User.id}`}><a><Card.Title>{/* <Image src="holder.js/171x180" roundedCircle /> */}{post.Retweet.User.nickname}</Card.Title></a></Link>
                            <Card.Text>
                            <PostCardContent postContent = {post.Retweet.content}/>
                            </Card.Text>
                        </div>
                    </Card>)
                    :
                    (<div style={{padding:'24px'}}>
                                                    <Link href= {`/user/${post.User.id}`}><a><Card.Title>{/* <Image src="holder.js/171x180" roundedCircle /> */}{post.User.nickname}</Card.Title></a></Link>

                        <Card.Text>
                        <PostCardContent postContent = {post.content}/>
                        </Card.Text>
                    </div>
                    )
                    }
                    <ul style={ulStyle}>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                            <Share style={{width:'100%'}} onClick={onRetweet}/>
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                            {like
                                ?<HeartFill style={{width:'100%',color:"#dc3545"}} onClick={onUnLike}/>
                                :<Heart style={{width:'100%'}} onClick={onLike}/>
                                }
                            </span>
                        </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                                <ChatDots style={{width:'100%'}} onClick={OnToggleComment}/>
                            </span>
                            </li>
                        <li style={liStyle}>
                            <span style={spanStyle}>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={renderTooltip}
                                    trigger='click'
                                >
                                    <ThreeDots style={{width:'100%'}}>Hover me to see</ThreeDots>
                                </OverlayTrigger>
                                
                            </span>
                        </li>
                    </ul>
                    
                </Card.Body>
            </Card>
            {commentOpen &&
            (<div style={{width:'33rem'}}>
                <CommentForm post={post}/>
                <span>{post.Comments.length}개의 댓글</span>
                <ListGroup variant="flush" style={{marginTop: 20}}>
                    {post.Comments[0] && post.Comments.map((v) => (
                        <ListGroup.Item>
                            {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                            
                            <Link href= {`/user/${v.User.id}`}><a>{v.UserId && v.User.nickname}</a></Link>
                            <br/>
                            {v.content}
                        </ListGroup.Item>
                    ))}
                    
                </ListGroup>
            </div>
            )    
        }
        </div>
    )
}
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
        RetweetId: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
}
export default PostCard
