import React,{useState,useCallback, useEffect} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import Router from 'next/router'
import useInput from '../hooks/useInput'
import {useDispatch, useSelector} from 'react-redux'
import { SIGN_UP_REQUEST } from '../reducers/user'
const signup = () => {
    const dispatch = useDispatch();
    const {me, signUpLoading, signUpDone} = useSelector(state => state.user)
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [checkbox, setCheckbox] = useState('')
    const [checkError, setCheckError] = useState(false)

    useEffect(() => {
        
        if(signUpDone){
            Router.push('/');
        }
    }, [signUpDone])
    useEffect(() => {
        if(me && me.id){
            Router.replace('/');
        }
    }, [me && me.id])
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value)
            setPasswordError(e.target.value !== password)
        },
        [password],
    )
    const onChangeCheck =useCallback(
        (e) => {
            setCheckbox(e.target.checked);
            
        }
    )
    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault();
            if(password !== passwordCheck){
                console.log('비밀번호확인')
                return setPasswordError(true);
            }
            if(!checkbox){
                return setCheckError(true);
            }
            dispatch({
                type: SIGN_UP_REQUEST,
                data: {email, password, nickname}
            })
        },
        [password,passwordCheck,checkbox],
    )
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
    )
}

export default signup
