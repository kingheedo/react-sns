import React, { useCallback, useEffect } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const FormLabel = styled(Form.Label)`
    padding: 10px;
`;
const FormControl = styled(Form.Control)`
     margin-left: 10px
`;
const FormButton = styled(Button)`
    background: #4088bc;
    &:hover{
    background: #0069d9;
  }
  color: #FFFFFF;
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
                    <FormControl type="email" placeholder="Email" value={email} onChange={onChangeEmail} required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <FormLabel column sm={2}>
                    Password
                    </FormLabel>
                    <Col sm={10}>
                    <FormControl type="password" placeholder="Password" value={password} onChange={onChangePassword} required />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <FormButton disabled={logInLoading} variant="primary" type="submit">
                            {logInLoading ? 'Loading???' : '?????????'}    
                        </FormButton>
                    <Link href="/signup"><FormButton variant="outline-primary">????????????</FormButton></Link>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default LoginForm;
