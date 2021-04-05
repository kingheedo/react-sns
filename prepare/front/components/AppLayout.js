import React, { useState } from 'react';
import Proptypes from 'prop-types'
import {Navbar,Container,Row,Col,FormControl,Nav,Form,Button} from 'react-bootstrap'
import {useSelector} from 'react-redux';
import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import styled, { createGlobalStyle } from 'styled-components';

 const Global = createGlobalStyle`
    .container-true {
         margin: 20px !important;
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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">프로필</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">찾기</Button>
                </Form>
                <Nav.Link href="/signup">회원가입</Nav.Link>
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
    children: Proptypes.node.isRequired,
}
export default AppLayout
