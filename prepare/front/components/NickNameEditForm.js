import React, { useCallback } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

const EditNickNameButton = styled(Button)`
color: #ffffff;
 background: #4088bc;
    &:hover{
    background: #0069d9;
  }
`;

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
                <EditNickNameButton variant="primary" onClick ={onClick}>수정</EditNickNameButton>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default NickNameEditForm;
