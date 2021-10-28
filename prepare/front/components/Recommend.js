import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import RecommendFollowButton from './RecommendFollowButton';

const ListGroupItem = styled(ListGroup.Item)`
    margin:0 !important;
    padding: 2rem;
`;
const ListItemWrapper = styled.div`
    position: relative;
    z-index: 9;
    
`;
const Recommend = ({ recommend }) => /*이 부분이 원래 단일아이디를 가져와서 비교해야 된다.*/ (
    <div>
        <ListGroup>
            <ListGroup.Item>Who to follow</ListGroup.Item>
            {recommend && recommend.map((v, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItemWrapper key={i}>
                    <ListGroupItem action href={`/user/${v.id}`}>
                        {v.nickname}
                    </ListGroupItem>
                    <h2 style={{ margin: 0 }}>
                        <RecommendFollowButton recommendUser={v} />
                    </h2>
                </ListItemWrapper>
            ))}
        </ListGroup>
    </div>
);
Recommend.propTypes = {
    recommend: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Recommend;
