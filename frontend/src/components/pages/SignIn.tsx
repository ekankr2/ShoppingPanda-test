import React, {FC, useState, FormEvent, useEffect} from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import {setError} from "../../store/actions/pageActions";
import {useAuthStore} from "../../store/authHooks";
import {useWindowStore} from "../../store/windowHooks";

interface Props {
    history: RouteComponentProps["history"];
    location: {
        state: {
            next: string
        }
    }
    match: RouteComponentProps['match'];
}

const SignIn: FC<Props> = (props) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const signIn = useAuthStore(state => state.signIn);
    const user = useAuthStore(state => state.user);
    const error = useWindowStore(state => state.error);

    useEffect(() => {
        return () => {
            if (error) {
                setError('')
            }
        }
    }, [error]);

    useEffect(() => {
        const {history, location: {state}} = props
        if (user) {
            if (state && state.next) {
                history.push(state.next)
            } else {
                history.goBack()
            }
        }
    }, [user, props])

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (error) {
            setError('')
        }
        setLoading(true);
        signIn({account, password}, () => setLoading(false))
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className="has-text-centered is-size-2 mb-3">Sign In</h2>
                <form className="form" onSubmit={submitHandler}>
                    {error && <Message type="danger" msg={error}/>}
                    <Input
                        type="email"
                        name="email"
                        value={account}
                        onChange={(e) => setAccount(e.currentTarget.value)}
                        placeholder="Email address"
                        label="Email address"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        placeholder="Password"
                        label="Password"
                    />
                    <p><Link to="/forgot-password">Forgot password ?</Link></p>
                    <Button text={loading ? "Loading..." : "Sign In"} className="is-primary is-fullwidth mt-5"
                            disabled={loading}/>
                </form>
            </div>
        </section>
    );
}

export default SignIn;
