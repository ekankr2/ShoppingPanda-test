import React, { FC, useState, FormEvent, useEffect } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import {useWindowStore} from "../../store/windowHooks";

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const error = useWindowStore(state => state.error);
  const setError = useWindowStore(state => state.setError);

  useEffect(() => {
    return () => {
      if(error) {
        setError('')
      }
    }
  }, [error]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      setError('')
    }
    setLoading(true);
  }

  return(
    <section className="section">
      <div className="container">
        <h2 className="has-text-centered is-size-2 mb-3">Sign Up</h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Input 
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            placeholder="First name"
            label="First name"
          />
          <Input 
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
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
          <Button text={loading ? "Loading..." : "Sign Up"} className="is-primary is-fullwidth mt-5" disabled={loading} />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
