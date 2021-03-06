import React, { useState, useCallback, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Head from 'next/head';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST, SIGN_UP_RESET } from '../reducers/user';
import useInput from '../hooks/useInput';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';

const signup = () => {
    const dispatch = useDispatch();
    const { me, signUpLoading, signUpDone, signUpError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [checkbox, setCheckbox] = useState('');
    const [checkError, setCheckError] = useState(false);

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, []);
    useEffect(() => {
        if (signUpDone) {
            alert('회원가입이 완료되었습니다.');
            Router.push('/');
        }
    }, [signUpDone]);
    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password],
    );
    const onChangeCheck = useCallback(
        (e) => {
            setCheckbox(e.target.checked);
        },
    );
    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault();
            if (password !== passwordCheck) {
                console.log('비밀번호확인');
                return setPasswordError(true);
            }
            if (!checkbox) {
                return setCheckError(true);
            }
            dispatch({
                type: SIGN_UP_REQUEST,
                data: { email, password, nickname },
            });
        },
        [password, passwordCheck, checkbox, email, nickname],
    );
    return (
            <AppLayout>
                <Head>
                    <title>회원가입</title>
                </Head>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" placeholder="이메일을 입력하세요." value={email} onChange={onChangeEmail} required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control type="text" placeholder="닉네임을 입력하세요." value={nickname} onChange={onChangeNickname} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={onChangePassword} required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPasswordCheck">
                    <Form.Label>비밀번호 체크</Form.Label>
                    <Form.Control type="password" value={passwordCheck} onChange={onChangePasswordCheck} required/>
                    {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="약관에 동의합니다." checked={checkbox} onChange={onChangeCheck}/>
                        {checkError && <div>약관 버튼을 클릭하세요.</div>}
                    </Form.Group>
                    <Button disabled ={signUpLoading} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </AppLayout>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (cookie && context.req) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});
export default signup;
