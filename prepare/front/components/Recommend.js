import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import RecommendFollowButton from './RecommendFollowButton';

const List = styled(ListGroup)`
    width: 20rem;
    top: 21rem;
    position: fixed;
    @media screen and (max-width: 992px) { 
    display:none;
};

`;
const ListGroupItem = styled(ListGroup.Item)`
    margin:0 !important;
    padding: 2rem;
`;
const ListItemWrapper = styled.div`
    position: relative;
    
`;
const Recommend = ({ recommend }) => {
    const h2Style = useMemo(() => ({ margin: '0' }), []);

   return (
       <>
        <List>
            <ListGroup.Item>Who to follow</ListGroup.Item>
            {recommend && recommend.map((v, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItemWrapper key={i}>
                    <ListGroupItem action href={`/user/${v.id}`}>
                        {v.nickname}
                    </ListGroupItem>
                    <h2 style={h2Style}>
                        <RecommendFollowButton recommendUser={v} />
                    </h2>
                </ListItemWrapper>
            ))}
        </List>
       </>
   );
};
Recommend.propTypes = {
    recommend: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Recommend;
