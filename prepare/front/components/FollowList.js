import React from 'react'
import { Card, Button, CardGroup,ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user'
const FollowList = ({header,data}) => {
    const dispatch = useDispatch()
    const onCancel = (id) => () => {
        if(header === '팔로잉'){
        dispatch({
            type: UNFOLLOW_REQUEST,
            data : id
        })

            dispatch({
                type: REMOVE_FOLLOWER_REQUEST,
                data: id
            })
        
    }
    }
    


    const CardContent = data.map((v,i) => (
                    <>
                  
                            <Card >
                                <Card.Header>{header}</Card.Header>
                                <Card.Body>
                                <Card.Title>{v.nickname}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <Button onClick={onCancel(i.id)}>X</Button>
                                </Card.Footer>
                            </Card>
                    
                    </>
    ))
    return (
        <>
            <ListGroup  style={{marginBottom:'5rem'}}>
                <ListGroup.Item>
                    <CardGroup>
                        {CardContent}
                    </CardGroup>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
FollowList.propTypes ={
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}
export default FollowList
