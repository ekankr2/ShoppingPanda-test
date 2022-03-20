import React, {useState} from 'react';
import {Button, Container, TextField,} from "@mui/material";
import {useAuthStore} from "../../store/authHooks";

const TestPage = () => {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const user = useAuthStore(state => state.user);
    const signIn = useAuthStore(state => state.signIn);
    const signOut = useAuthStore(state => state.signOut);
    const reIssue = useAuthStore(state => state.reIssue);

    console.log('유저:', user)

    return (
        <Container>
            <h3>Zustand Login Test</h3>
            <h3>user: {user?.userName}</h3>
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
            <Button
                variant='outlined'
                color='primary'
                onClick={reIssue}
            >
                리이슈
            </Button>
            <Button
                variant='outlined'
                color='warning'
                onClick={signOut}
            >
                로그아웃
            </Button>
        </Container>
    );
};

export default TestPage;
