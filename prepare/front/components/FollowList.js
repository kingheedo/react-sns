import React from 'react'
import { Card, Button,CardGroup,ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
const FollowList = ({header,data}) => {
    const CardContent = data.map((v,i) => (
                    <>
                  
                            <Card >
                                <Card.Header>{header}</Card.Header>
                                <Card.Body>
                                <Card.Title>{v.nickname}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
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
