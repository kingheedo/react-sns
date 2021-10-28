import React, { useCallback } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

const NickNameEditForm = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const [nickname, onChangeNickName] = useInput(me?.nickname || '');
    const onClick = useCallback(
        () => {
            dispatch({
                type: CHANGE_NICKNAME_REQUEST,
                data: nickname,
            });
        },
        [nickname],
    );

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>닉네임</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={nickname} onChange={onChangeNickName} />
            <InputGroup.Append>
                <Button variant="primary" onClick ={onClick}>수정</Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default NickNameEditForm;
