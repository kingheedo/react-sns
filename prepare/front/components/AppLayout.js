import React, { useState } from 'react';
import propTypes from 'prop-types'
import {Navbar,Container,Row,Col,FormControl,Nav,Form,Button} from 'react-bootstrap'
import {useSelector} from 'react-redux';
import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

 const Global = createGlobalStyle`
    .container-true {
         margin: 20px !important;
    }
    
    a {
        margin: 5px !important;
    }
    `

const AppLayout = ({children}) => {
   
    const {me} = useSelector(state => state.user)
    return (
       <div>
           <Global/>
           <Navbar bg="light" expand="lg">
        <Navbar.Brand>노드버드</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link href="/">Home</Link>
                    <Link href="/profile">프로필</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">찾기</Button>
                </Form>
                {!me && <Link href="/signup">회원가입</Link>
                }
               
            </Navbar.Collapse>
        </Navbar>
        <Container fluid="true">
            <Row xs={1} md ={2} lg={3}>
                <Col>
                    {me ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col>{children}</Col>
                <Col>
                    <a href="https://kingheedo.tistory.com/" target ="_blank" rel ="noreferrer noopener">Heedo</a>
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
