import React, {useState} from 'react';

import {useAuthStore, useStore} from '../../hooks/zustandExampleHooks'
import {
    Button,
    Container, TextField,
} from "@mui/material";

const TestPage = () => {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const {user, signIn} = useAuthStore();

    console.log('유저:', user)

    return (
        <Container>
            <h3>Zustand Login Test</h3>
            <h3>user: {user?.accessToken}</h3>
            <TextField
                label="아뒤"
                required
                fullWidth
                onChange={(e) => setId(e.target.value)}
                value={id}
            />
            <TextField
                label="비번"
                required
                fullWidth
                className='mt-5'
                onChange={(e) => setPw(e.target.value)}
                value={pw}
            />
            <Button
                variant='outlined'
                color='primary'
                onClick={() => {signIn(id, pw)}}
            >
                로그인
            </Button>
        </Container>
    );
};

export default TestPage;
