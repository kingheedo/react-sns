import React from 'react';
import { Card, Button, CardGroup, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const List = styled(ListGroup)`
 margin-bottom: 5rem
`;
const FollowList = ({ header, data, mutate }) => {
    const dispatch = useDispatch();
    const onCancel = (id) => () => {
        if (header === '팔로잉') {
        dispatch({
            type: UNFOLLOW_REQUEST,
            data: id,
        });
        mutate((prev) => prev.filter((data) => data.id !== id));
    } else {
            dispatch({
                type: REMOVE_FOLLOWER_REQUEST,
                data: id,
            });
        mutate((prev) => prev.filter((data) => data.id !== id));
        }
    };

    const CardContent = data && data.map((v, i) => (
                  
                            <Card >
                                <Card.Header>{header}</Card.Header>
                                <Card.Body>
                                <Card.Title>{v.nickname}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <Button onClick={onCancel(v.id)}>X</Button>
                                </Card.Footer>
                            </Card>
                    
    ));
    return (
            <List>
                <ListGroup.Item>
                    <CardGroup>
                        {CardContent}
                    </CardGroup>
                </ListGroup.Item>
            </List>
    );
};
FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    mutate: PropTypes.func.isRequired,
};
export default FollowList;
