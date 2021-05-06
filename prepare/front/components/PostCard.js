import React, { useCallback, useState } from 'react'
import {Card,Button,Image,ListGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {Share,Heart,HeartFill,ChatDots,ThreeDots} from 'react-bootstrap-icons'
import { useSelector,useDispatch } from 'react-redux'
import { removePostRequestAction, REMOVE_POST_REQUEST } from '../reducers/post'
import { removePostOfMeAction } from '../reducers/user'
import CommentForm from './CommentForm'
import PostCardContent from './PostCardContent'
import PostImages from './PostImages'
import PropTypes, { object } from 'prop-types'

const PostCard = ({post}) => {
    const [like, setLike] = useState(false)
    const [commentOpen, setCommentOpen] = useState(false)
    const id = useSelector(state => state.user.me?.id)
    const dispatch = useDispatch();
    const onToggleLike = useCallback(
        () => {
            setLike((prev)=> !prev)
        },
        [],
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
    return (
        <div style={{margin: '100px 0 20px'}}>
            <Card style={{ width: '33rem'}}>
                {post.Images[0] && <PostImages images = {post.Images}/>}
                <Card.Body style={{padding:0}}>
                    <div style={{padding:'24px'}}>
                        <Card.Title><Image src="holder.js/171x180" roundedCircle />{post.User.nickname}</Card.Title>
                        <Card.Text>
                        <PostCardContent postContent = {post.content}/>
                        </Card.Text>
                    </div>
                    <ul style={{margin:0, padding:0, listStyle:'none', borderTop: '1px solid #f0f0f0'}}>
                        <li style={{width:"25%",borderRight: '1px solid #f0f0f0',float: 'left',textAlign: 'center',margin:'12px 0'}}>
                            <span style={{lineHeight:'14px',cursor:'pointer',width:'100%',fontSize:"16px"}}>
                            <Share style={{width:'100%'}}/>
                            </span>
                        </li>
                        <li style={{width:"25%",borderRight: '1px solid #f0f0f0',float: 'left',textAlign: 'center',margin:'12px 0'}}>
                            <span style={{lineHeight:'14px',cursor:'pointer',width:'100%',fontSize:"16px"}}>
                            {like?<HeartFill style={{width:'100%',color:"#dc3545"}} onClick={onToggleLike}/>:<Heart style={{width:'100%'}} onClick={onToggleLike}/>}
                            </span>
                        </li>
                        <li style={{width:"25%",borderRight: '1px solid #f0f0f0',float: 'left',textAlign: 'center',margin:'12px 0'}}>
                            <span style={{lineHeight:'14px',cursor:'pointer',width:'100%',fontSize:"16px"}}>
                                <ChatDots style={{width:'100%'}} onClick={OnToggleComment}/>
                            </span>
                            </li>
                        <li style={{width:"25%",float: 'left',textAlign: 'center',margin:'12px 0'}}>
                            <span style={{lineHeight:'14px',cursor:'pointer',width:'100%',fontSize:"16px"}}>
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
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            {v.User && v.User.userNickname}
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
        createdAt: PropTypes.object,
    }).isRequired,
}
export default PostCard
