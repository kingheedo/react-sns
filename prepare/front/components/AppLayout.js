import React, { useCallback, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Container, Row, Col, FormControl, Form, Button, ButtonGroup, Modal, ListGroup, CloseButton, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { Twitter, Search, HouseDoor, Bookmark, Person } from 'react-bootstrap-icons';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

import PostForm from './PostForm';

import { LOAD_RECOMMEND_USER_REQUEST, LOAD_SEARCH_USER_REQUEST } from '../reducers/user';
import Recommend from './Recommend';

const Global = createGlobalStyle`
    .container-true {
         margin: 2rem !important;
    }
    a {
        margin: 5px !important;
    }
    .list-group-item-action{
        margin: 0 !important;
    }
    `;
    
const ButtonGroupWrapper = styled(ButtonGroup)`
    display:flex;
    position: fixed;
    top: 7rem;
    a{
        margin: 0 !important;
         padding-right: 14rem;
        text-decoration: none;
    };
    Button{
        text-align: left;
    };
    h3{
         color: #0a58ca;
    };
     @media screen and (max-width: 767px) { 
    position: static;
};

`;

const TwitterWrapper = styled.h3`
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 3rem;
    position: fixed;
    @media screen and (max-width: 767px) { 
    position: static;
};
`;

const SearchList = styled(ListGroup)`
     position: fixed;
     top: 3.19rem;
     z-index: 9;
     width: 20.2%;
     border-left: 1px solid #e9ecef;
     background-color: #ffffff;
     border-right: 1px solid #e9ecef;
    `;
const CircleButton = styled(Button)`
    margin-top: 50px;
    border-radius: 9999px;
        text-align: center !important;
        display:block;
        height: 64px;
        width: 270px;
        font-size: 1.5rem;
}
`;

const SearchWrapper = styled.div`
position: fixed; 
 width: 20vw;

`;

const SearchForm = styled(FormControl)`
    display: inline-block;
    padding-left:30px;
    width: 100% !important;
}
`;
const SearchIcon = styled(Search)`
                            position:absolute;
                            top:9px;
                            left:5px;
                            width:20px;
                            height:20px;
                            padding-left:5px;
    `;
const DeleteSearchContent = styled(CloseButton)`
                            position: absolute;
                             right: 1.5rem;
                             top: 0.25rem;
    `;
const DropdownDivider = styled(Dropdown.Divider)`
                            margin: 0;
    `;
  const UserInfoWrapper = styled.div`
   top: 5rem;
   position: fixed;
 

   @media screen and (max-width: 992px) { 
    position: fixed;
    top: 31rem;
    left: 4rem;
};
@media screen and (max-width: 840px) { 
    left: 3rem;
};
  @media screen and (max-width: 767px) { 
    position: relative;
    top: 5rem;
    left: 0;
};
  `; 

  const Col1 = styled(Col)`
    padding-left: 12rem;
    border-right: 1px solid #DCDCDC;
    position: relative;
  @media screen and (max-width: 1456px) { 
    position: static;
    padding-left: 0;
    display:flex;
    flex-direction: column;
    align-items:center;

},
  `;

  const Col2 = styled(Col)`
    border-right: 1px solid #DCDCDC;
  
  @media screen and (max-width: 1456px) { 
    position: relative;
};
@media screen and (max-width: 767px) { 
    top: 5rem;
};
  ` ;

const TwitterIcon = styled(Twitter)`
  color: #0a58ca
`
const HouseDoorIcon = styled(HouseDoor)`
  margin-right : 1rem
`
const BookmarkIcon = styled(Bookmark)`
  margin-right : 1rem
`
const PersonIcon = styled(Person)`
  margin-right : 1rem
` 
const Forms = styled(Form)`
  position: relative;
` 
const Anchor = styled.a`
   display: block; 
   text-decoration: none;
` 
const AppLayout = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleModalForm = useCallback(
    () => {
      setShow((prev) => !prev);
    },
    [show],
  );

  const { me, recommend, searchUserList, searchUserLoading, searchUserDone } = useSelector((state) => state.user);
  const { addPostLoading } = useSelector((state) => state.post);
  const [searchContent, setsearchContent] = useState('');
  const [searchHashtag, setsearchHashtag] = useState('');
  const [searchControl, setSearchControl] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (me && me.Followers.length >= 1 && me.Followings.length >= 1) {
      dispatch({
        type: LOAD_RECOMMEND_USER_REQUEST,
      });
    }
  }, [me]);

  useEffect(() => {
    if (searchContent.startsWith('#')) {
      setsearchHashtag(searchContent.slice(1));
    }
    if (searchContent) {
      dispatch({
        type: LOAD_SEARCH_USER_REQUEST,
        data: searchContent,
      });
    }
  }, [searchContent]);

  useEffect(() => {
    if (searchUserLoading) {
      setSearchControl(true);
    }
  }, [searchUserLoading]);

  useEffect(() => {
    if (addPostLoading) {
      if (show) {
        setShow((prev) => !prev);
      }
    }
  }, [addPostLoading]);
  useEffect(() => {
    if (searchUserDone) {
      setSearchControl(false);
    }
  }, [searchUserDone]);

  const onChangeSearchUserInput = useCallback(
    (e) => {
      setsearchContent(e.target.value);
    },
    [searchContent],
  );
  const DeleteSearch = useCallback(
    () => {
      setsearchContent('');
      dispatch({
        type: LOAD_SEARCH_USER_REQUEST,
        data: null,
      });
    },
    [],
  );

  const FindUser = useCallback(
    (e) => {
      e.preventDefault();
      searchUserList?.map((v) => {
        if (searchContent && searchContent === v.nickname) {
          Router.push(`/user/${v.id}`);
          setsearchContent('');
        }
      });

      if (searchHashtag) {
        Router.push(`/hashtag/${searchHashtag}`);
        setsearchContent('');
      }
    },
    [searchHashtag, searchUserList, searchContent],
  );
  const SelectListItem = useCallback(
    () => {
      setsearchContent('');
    },

    [],
  );
  return (
      <div>
         <Global />
         <Container fluid="true">
          <Row xs={1} md={2} lg={3}>
              <Col1>
                  <Link href="/">
                      <TwitterWrapper>
                          <TwitterIcon/>
                      </TwitterWrapper>
                  </Link>
                  <ButtonGroupWrapper vertical>
                      <Button variant size="lg">
                        <Link href="/">
                          <h3>
                          <HouseDoorIcon/>
                          Home
                          </h3>
                        </Link>
                      </Button>

                      <Button variant size="lg">
                        <Link href="/bookmarks">
                          <h3>
                          <BookmarkIcon/>
                          Bookmark
                          </h3>
                      </Link>
                      </Button>

                       <Button variant size="lg">
                         <Link href="/profile">
                          <h3>
                          <PersonIcon/>
                          Profile
                          </h3>
                      </Link>
                       </Button>

                      {!me && (
                      <Button variant size="lg"><Link href="/signup">회원가입</Link>
                      </Button>
                      )}

                      <h1>
                          <CircleButton variant="primary" onClick={handleModalForm}>
                            Tweet
                          </CircleButton>
                      </h1>
                      {me ? (
                        <Modal size="lg" show={show} onHide={handleModalForm} animation={false}>
                          <Modal.Header closeButton>
                            <Modal.Title>{' '}</Modal.Title>
                          </Modal.Header>
                            <Modal.Body><PostForm/></Modal.Body>
                        </Modal>
                        ) : null}
                  </ButtonGroupWrapper>
              </Col1>

              <Col2>{children}</Col2>

              <Col>
              
                  <Forms inline onSubmit={FindUser}>
                      <SearchWrapper>
                          <SearchIcon />
                          <SearchForm value={searchContent} onChange={onChangeSearchUserInput} type="text" placeholder="Search User or Hashtag" className="mr-sm-2" />
                          {searchContent && <DeleteSearchContent onClick={DeleteSearch} />}
                      </SearchWrapper>

                      <SearchList>
                      {
                                (searchContent && searchUserList) && searchUserList.map((v, i) => (
                                  // eslint-disable-next-line react/no-array-index-key
                                  <Dropdown key={i}>
                                      <Dropdown.Item disabled={searchControl} onSelect={SelectListItem}>
                                          <Link href={`/user/${v.id}`}><Anchor>{v.nickname}</Anchor></Link>
                                      </Dropdown.Item>
                                      <DropdownDivider />
                                  </Dropdown>

                                ))
                            }
                      </SearchList>
                  </Forms>
                  <UserInfoWrapper>
                          {me ? <UserProfile /> : <LoginForm />}
                  </UserInfoWrapper>
                  {(me && recommend) ? <Recommend recommend={recommend} /> : null}

              </Col>
          </Row>
         </Container>
      </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};
export default AppLayout;
