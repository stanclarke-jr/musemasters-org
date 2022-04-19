import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FormContainer from './FormContainer';
import CloseFormButton from './CloseFormButton';
import FormHeader from './FormHeader';
import Label from './Label';
import RememberMeLostPassword from './RememberMeLostPassword';
import SubmitFormButton from './SubmitFormButton';
import FormLink from './FormLink';
import Loading from '../core/Loading';
import ErrorMsg from '../core/ErrorMsg';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { 'Content-type': 'application/json' } };
      setIsLoading(true);
      const { data } = await axios.post(
        '/api/users/login',
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <CloseFormButton />
      <FormHeader>Log in to MuseMasters</FormHeader>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {isLoading && <Loading />}
      <Form method="post" onSubmit={handleSubmit}>
        <>
          <Label htmlFor="email">Your email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="name@domain.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
        <>
          <Label htmlFor="password">Your password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="••••••••"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
        <RememberMeLostPassword />
        <SubmitFormButton>Log in to your account</SubmitFormButton>
        <FormLink
          to="/create-account"
          child1={'Not a MuseMaster?'}
          child2={'Create an account'}
        />
      </Form>
    </FormContainer>
  );
};

const Form = styled.form`
  padding: 0 1.5rem 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    padding-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
  @media (min-width: 1280px) {
    padding-bottom: 2rem;
  }
`;
const Input = styled.input`
  display: block;
  width: 100%;
  background-color: rgb(249 250 251);
  color: rgb(17 24 39);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem;
  margin-bottom: 1rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 0.25rem;

  &:focus {
    background-color: transparent;
  }
`;

export default LogInPage;
