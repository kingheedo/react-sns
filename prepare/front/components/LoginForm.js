import React, { useCallback, useEffect, useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const FormLabel = styled(Form.Label)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { logInLoading, logInError } = useSelector((state) => state.user);

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
        }, [logInError]);

    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(loginRequestAction({ email, password }));
         }, [email, password],
    );
    return (
        <div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <FormLabel column sm={2}>
                    Email
                    </FormLabel>
                    <Col sm={10}>
                    <Form.Control style={{ marginLeft: '10px' }} type="email" placeholder="Email" value={email} onChange={onChangeEmail} required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <FormLabel column sm={2}>
                    Password
                    </FormLabel>
                    <Col sm={10}>
                    <Form.Control style={{ marginLeft: '10px' }} type="password" placeholder="Password" value={password} onChange={onChangePassword} required />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button disabled={logInLoading} variant="primary" type="submit">
                            {logInLoading ? 'Loading…' : '로그인'}    
                        </Button>
                    <Link href="/signup"><Button variant="outline-primary">회원가입</Button></Link>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default LoginForm;
