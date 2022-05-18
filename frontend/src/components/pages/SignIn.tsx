import React, {useEffect, useState} from 'react';
import {
    Alert,
    Box,
    Button,
    Center,
    Checkbox,
    Group,
    Image,
    PasswordInput,
    Space,
    TextInput,
} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useAuthStore} from "../../store/authHooks";
import {useWindowStore} from "../../store/windowHooks";
import {AlertCircle} from 'tabler-icons-react';
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
    const signIn = useAuthStore(state => state.signIn)
    const user = useAuthStore(state => state.user)
    const loading = useWindowStore(state => state.loading)
    const setLoading = useWindowStore(state => state.setLoading)
    const error = useWindowStore(state => state.error)
    const setError = useWindowStore(state => state.setError)
    const [userEmail] = useState(localStorage.getItem('userEmail'))
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate(-1)
        }
    }, [user])

    const form = useForm({
        initialValues: {
            email: userEmail ? userEmail : '',
            password: '',
            rememberMe: !!userEmail,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        if (error) {
            setError('')
        }
        const {rememberMe, ...rest} = values
        localStorage.removeItem('userEmail')
        if (rememberMe) {
            localStorage.setItem('userEmail', rest.email)
        }
        signIn(rest, () => setLoading(false))
    }

    return (
        <Center sx={{height: '93vh', backgroundColor: 'gray'}}>
            <Box sx={{minWidth: 500, backgroundColor: 'white', padding: 30, borderRadius: 5}}>
                <form onSubmit={form.onSubmit((handleSubmit))}>
                    <div className='form__logo'>
                        <Image src="https://user-images.githubusercontent.com/83811729/169019704-8fca547c-4f68-479c-b2dc-3611360988d3.png"
                               alt="Random unsplash image"/>
                    </div>
                    {error &&
                        <Alert icon={<AlertCircle size={16}/>} title="Login Failed" color="red">
                            Please check your email or password
                        </Alert>
                    }
                    <Space h="md"/>
                    <TextInput
                        required
                        label="이메일"
                        placeholder="your@email.com"
                        size="md"
                        {...form.getInputProps('email')}
                    />
                    <Space h="lg"/>
                    <PasswordInput
                        required
                        label="비밀번호"
                        size="md"
                        placeholder="password"
                        {...form.getInputProps('password')}
                    />
                    <Space h="md"/>
                    <Checkbox
                        mt="md"
                        label="ID 저장"
                        {...form.getInputProps('rememberMe', {type: 'checkbox'})}
                    />
                    <Group position="right">
                        <Button my="sm" type="submit" loading={loading}>로그인</Button>
                    </Group>
                </form>
            </Box>
        </Center>
    );
};

export default SignIn;