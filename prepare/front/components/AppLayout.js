import React, { useCallback, useRef,  } from 'react';
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
import { LOAD_SEARCH_USER_REQUEST } from '../reducers/user';

    const Global = createGlobalStyle`
    .container-true {
         margin: 2rem !important;
    }
    a {
        margin: 5px !important;
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
    width: 87% !important;
    padding-left:30px;
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
                             right: 4.6rem;
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
    
    const {me,searchUserList,searchUserLoading,searchUserDone} = useSelector(state => state.user)
    const {addPostLoading} = useSelector(state => state.post)
    const [searchContent, setsearchContent] = useState('');
    const [searchHashtag, setsearchHashtag] = useState('');
    const [searchControl, setSearchControl] = useState(false);
    const [showControl, setshowControl] = useState(false);
    const dispatch = useDispatch();
    const userLink = useRef();
    const formValue = useRef();

    

        useEffect(() => {
            //#stat
            // stat 을 뽑아내고 그걸 dispatch 해야한다. 
            if(searchContent.startsWith('#')){
                setsearchHashtag(searchContent.slice(1))
            console.log('searchUser',searchHashtag)
            }
            if(searchContent){
            dispatch({
                type: LOAD_SEARCH_USER_REQUEST,
                data: searchContent
            })
            }
        }, [searchContent,searchHashtag])

        

    useEffect(() => {
        if(searchUserLoading){
            setSearchControl(true)
        }
        if(searchUserDone)
        setSearchControl(false)
    }, [searchUserLoading,searchUserDone])

    useEffect(() => {
        if(addPostLoading){
            if(show){
            setShow((prev) => !prev)
            }
        }
    }, [addPostLoading])

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
                if(!searchHashtag && searchContent && searchUserList.length >=1 ){
                userLink.current.click();
                setsearchContent('')
                }
                if(searchHashtag){
                Router.push(`/hashtag/${searchHashtag}`)
                setsearchContent('')
                }
        },
        [searchHashtag,searchUserList,searchContent,userLink.current,],
    )
    const SelectListItem = useCallback(
        () => {
                setshowControl((showControl) => !showControl)
                setsearchContent('')
                
                },
        
        [showControl,],
    )
    return (
        
       <div>
           <Global/>
        <Container fluid="true">
            <Row xs={1} md ={2} lg={3}>
                <Col style={Col1}>
                    <Link href="/">
                        <h2 style={containerH2}>
                            <Twitter style={{color: '#0a58ca'}}/>
                        </h2>
                    </Link>
                    <ButtonGroupWrapper vertical style= {{display:'flex',}}>
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

                <Col>
                    <Form inline style={{position:'relative', }}  onSubmit ={FindUser} >
                        <SearchIcon/>
                            
                        <SearchForm value={searchContent} onChange={onChangeSearchUserInput} type="text" placeholder="Search User or Hashtag" className="mr-sm-2" />
                        {searchContent && <DeleteSearchContent  onClick={DeleteSearch}/>}
                        {/* <Button style={{display:'none'}} variant="outline-success" onClick={onSearchUser}>찾기</Button> */}
                    
                
                    
                    
                    <ListGroup style={{width: '87%', borderLeft: '1px solid #e9ecef',borderRight: '1px solid #e9ecef' }}>
                            {
                                !searchUserLoading && searchUserList && searchUserList.map((v,i) => (
                                    <Dropdown>
                                        <Dropdown.Item disabled={searchControl}   show={showControl} onSelect={SelectListItem}>
                                                <Link href= {`/user/${v.id}`}><a style={{display:'block', textDecoration:'none'}} ref ={userLink} >{v.nickname}</a></Link>
                                        </Dropdown.Item>
                                        <DropdownDivider/>
                                    </Dropdown>
                                
                        ))
                            }
                        </ListGroup>
                    </Form>
                        
                    {me ? <UserProfile/> : <LoginForm/>}
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
