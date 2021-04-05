import React,{useState,useCallback} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import useInput from '../hooks/useInput'
import {useDispatch} from 'react-redux'
const signup = () => {
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [checkbox, setCheckbox] = useState('')
    const [checkError, setCheckError] = useState(false)
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
        () => {
            if(password !== passwordCheck){
                console.log('비밀번호확인')
                return setPasswordError(true);
            }
            if(!checkbox){
                return setCheckError(true);
            }
            // dispatch({
            //     type: SIGN_UP_REQUEST,
            //     data: {email, password, nickname}
            // })
        },
        [password,passwordCheck,checkbox],
    )
    return (
            <AppLayout>
                <Head>
                    <title>회원가입</title>
                </Head>
                <Form onSumbit={onSubmitHandler}>
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
                {passwordCheck.length > 0 && passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="약관에 동의합니다." checked={checkbox} onChange={onChangeCheck}/>
                    {checkError && <div>약관 버튼을 클릭하세요.</div>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </AppLayout>
    )
}

export default signup
