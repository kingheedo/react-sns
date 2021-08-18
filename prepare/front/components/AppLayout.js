import React, { useCallback,  } from 'react';
import propTypes from 'prop-types'
import {Navbar,Container,Row,Col,FormControl,Form,Button, ButtonGroup, Modal} from 'react-bootstrap'
import {useSelector} from 'react-redux';
import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import Router from 'next/router';
import { HouseDoor, Twitter } from 'react-bootstrap-icons';
import { useMemo } from 'react';
import { useState } from 'react';
import PostForm from './PostForm';
import { useEffect } from 'react';

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
    
    const {me} = useSelector(state => state.user)
    const {addPostLoading} = useSelector(state => state.post)
    const [searchInput, onChangeSearchInput] = useInput('');
    useEffect(() => {
        if(addPostLoading){
            if(show){
            setShow((prev) => !prev)
            }
        }
    }, [addPostLoading])
    const onSearch = useCallback(
        () => {
            Router.push(`/hashtag/${searchInput}`)
        },
        [searchInput],
    )
    return (
        
       <div>
            {/* <style type="text/css">
                {`
                .btn-flat {
                background-color: white;
                color: white;
                }
                
                `}
            </style> */}

           
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
                    <Form inline>
                        <FormControl style={{display: 'inline-block',width: '87%'}} value={searchInput} onChange={onChangeSearchInput} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={onSearch}>찾기</Button>
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
