import React, { useCallback,  } from 'react';
import propTypes from 'prop-types'
import {Container,Row,Col,FormControl,Form,Button, ButtonGroup, Modal, ListGroup, CloseButton, Dropdown} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import Router from 'next/router';
import {Twitter,Search } from 'react-bootstrap-icons';
import { useMemo } from 'react';
import { useState } from 'react';
import PostForm from './PostForm';
import { useEffect } from 'react';
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
    `

    const ButtonGroupWrapper = styled(ButtonGroup)`
    a{
        margin: 0 !important;
         padding-right: 14rem;
        text-decoration: none;
    },
    Button{
        text-align: left;
    }

`
    const CircleButton = styled(Button)`
    margin-top: 50px;
    border-radius: 9999px;
        text-align: center !important;
        display:block;
        height: 64px;
        width: 270px;
        font-size: 1.5rem;
}
`
    const SearchForm = styled(FormControl)`
    display: inline-block;
    padding-left:30px;
    width: 100% !important;
}
`
    const SearchIcon = styled(Search)`
                            position:absolute;
                            top:9px;
                            left:5px;
                            width:20px;
                            height:20px;
                            padding-left:5px;
    `
    const DeleteSearchContent = styled(CloseButton)`
                            position: absolute;
                             right: 1.5rem;
                             top: 0.25rem;
    `
    const DropdownDivider = styled(Dropdown.Divider)`
                            margin: 0;
    `

const AppLayout = ({children}) => {
    
    const containerH2 = useMemo(() => ({
        cursor: 'pointer',
         marginBottom:'10px',
         fontSize: '3rem'
    }),[])
    const Col1 = useMemo(() => ({
        paddingLeft: '12rem',
        borderRight: '1px solid #DCDCDC',
        position: 'relative',
    }),[])
    const Col2 = useMemo(() => ({
        borderRight:'1px solid #DCDCDC',
    }),[])
    const ButtonH1 = useMemo(() => ({
        
    }),[])
    
    const [show, setShow] = useState(false);
    const handleModalForm  = useCallback(
        () => {
            setShow((prev) => !prev)
        },
        [show],
    )
    
    const {me,recommend,searchUserList,searchUserLoading,searchUserDone} = useSelector(state => state.user)
    const {addPostLoading} = useSelector(state => state.post)
    const [searchContent, setsearchContent] = useState('');
    const [searchHashtag, setsearchHashtag] = useState('');
    const [searchControl, setSearchControl] = useState(false);
    const [showControl, setshowControl] = useState(true);
    const dispatch = useDispatch();

    

        useEffect(() => {
          if(me && me.Followers.length >=1 && me.Followings.length >=1){
              dispatch({
                  type :LOAD_RECOMMEND_USER_REQUEST
              })
          }
        }, [me])

        

        useEffect(() => {
            //#stat
            // stat 을 뽑아내고 그걸 dispatch 해야한다. 
            if(searchContent.startsWith('#')){
                setsearchHashtag(searchContent.slice(1))
            // console.log('searchUser',searchHashtag)
            }
            if(searchContent){
            dispatch({
                type: LOAD_SEARCH_USER_REQUEST,
                data: searchContent
            })
            }
        }, [searchContent])

        

    useEffect(() => {
        if(searchUserLoading){
            setSearchControl(true)
        }
    }, [searchUserLoading])

    useEffect(() => {
        if(addPostLoading){
            if(show){
            setShow((prev) => !prev)
            }
        }
    }, [addPostLoading])
    useEffect(() => {
        if(searchUserDone){
            setSearchControl(false)
        }
        
    }, [searchUserDone])
    


   const onChangeSearchUserInput = useCallback(
        (e) => {
            setsearchContent(e.target.value);
        },
        [searchContent],
    )
    const DeleteSearch = useCallback(
        () => {
            setsearchContent('');
            dispatch({
                type: LOAD_SEARCH_USER_REQUEST,
                data: null
            })
        },
        [],
    )
 
    
    const FindUser = useCallback(
        (e) => {
                e.preventDefault();
                searchUserList && searchUserList.map((v) => {
                    if(searchContent && searchContent === v.nickname){
                        Router.push(`/user/${v.id}`)
                    setsearchContent('')
                    }
                })
                
                if(searchHashtag){
                Router.push(`/hashtag/${searchHashtag}`)
                setsearchContent('')
                }
        },
        [searchHashtag,searchUserList,searchContent,],
    )
    const SelectListItem = useCallback(
        () => {
                setsearchContent('')
                },
        
        [],
    )
    return (
        
       <div>
           <Global/>
        <Container fluid="true">
            <Row xs={1} md ={2} lg={3}>
                <Col style={Col1}>
                    <Link style={{position: 'fixed'}} href="/">
                        <h2 style={containerH2}>
                            <Twitter style={{color: '#0a58ca',position: 'fixed'}}/>
                        </h2>
                    </Link>
                    <ButtonGroupWrapper vertical style= {{display:'flex',position: 'fixed',top: '7rem'}}>
                        <Button variant size="lg"><Link href="/">Home</Link></Button>
                        <Button variant size="lg"><Link href="/profile">Profile</Link></Button>
                        {!me && <Button variant size="lg"><Link href="/signup">회원가입</Link>
                        </Button>}
                        
                        <h1 stlye={ButtonH1}>
                            <CircleButton variant="primary" onClick={handleModalForm}>
                            Tweet
                        </CircleButton>
                        </h1>
                        {me ? (<Modal size="lg" show={show} onHide={handleModalForm} animation={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>{' '}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><PostForm/></Modal.Body>
                        </Modal>
                        ):null}
                    </ButtonGroupWrapper>
                </Col>

                <Col style={Col2}>{children}</Col>

                <Col  >
                    <Form inline style={{position: 'relative',zIndex:'10',}} onSubmit ={FindUser} >
                        <div  style={{position: 'fixed', width : '29%' }}>
                            <SearchIcon/>
                            <SearchForm value={searchContent} onChange={onChangeSearchUserInput} type="text" placeholder="Search User or Hashtag" className="mr-sm-2" />
                            {searchContent && <DeleteSearchContent  onClick={DeleteSearch}/>}
                        </div>
                        {/* <Button style={{display:'none'}} variant="outline-success" onClick={onSearchUser}>찾기</Button> */}
                    
                
                    
                    
                    <ListGroup style={{ position: 'fixed', top: '3.19rem', zIndex:'9', width: '29%', borderLeft: '1px solid #e9ecef', backgroundColor: '#ffffff',borderRight: '1px solid #e9ecef', }}>
                            {
                                (searchContent && searchUserList) && searchUserList.map((v,i) => (
                                    <Dropdown key = {i}>
                                        <Dropdown.Item  disabled={searchControl}  onSelect={SelectListItem}>
                                                <Link href= {`/user/${v.id}`}><a style={{display:'block', textDecoration:'none',}}  >{v.nickname}</a></Link>
                                        </Dropdown.Item>
                                        <DropdownDivider/>
                                    </Dropdown>
                                
                        ))
                            }
                        </ListGroup>
                    </Form>
                        <div style={{marginTop: '3rem',zIndex:'8', position: 'fixed'}}>
                            {me ? <UserProfile/> : <LoginForm/>}
                        </div>
                        {(me && recommend) ? <Recommend recommend ={recommend}/> : null}
                        
                </Col>
            </Row>
        </Container>
       </div>
    )
}

AppLayout.proptypes ={
    children: propTypes.node.isRequired,
}
export default AppLayout
