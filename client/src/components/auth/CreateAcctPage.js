import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import FormContainer from './FormContainer';
import CloseFormButton from './CloseFormButton';
import FormHeader from './FormHeader';
import Label from './Label';
import SubmitFormButton from './SubmitFormButton';
import FormLink from './FormLink';
import ErrorMsg from '../core/ErrorMsg';
import Loading from '../core/Loading';

const CreateAcctPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(
    'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  );
  const [message, setMessage] = useState(null);
  const [avatarMsg, setAvatarMsg] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fileUploadRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage(null);
      try {
        const config = { headers: { 'Content-type': 'application/json' } };
        setIsLoading(true);
        const { data } = await axios.post(
          '/api/users',
          { name, email, password, avatar },
          config
        );
        localStorage.setItem('userInfo', JSON.stringify(data));
        setIsLoading(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAvatar('');
        fileUploadRef.current.value = '';
        setError('');
        navigate('/');
      } catch (error) {
        setError(error.response.data.message);
        setIsLoading(false);
      }
    }
  };

  const postDetails = (picture) => {
    !picture ? setAvatarMsg('Please select an image') : setAvatarMsg(null);

    if (picture.type === 'image/jpeg' || picture.type === 'image/png') {
      const data = new FormData();
      data.append('file', picture);
      data.append('upload_preset', 'musemasters');
      data.append('cloud_name', 'dfjagubey');
      fetch(`https://api.cloudinary.com/v1_1/dfjagubey/image/upload/`, {
        method: 'post',
        body: data,
      }).then((response) =>
        response
          .json()
          .then((data) => {
            console.log(data);
            setAvatar(data.url.toString());
          })
          .catch((error) => {
            console.log(error);
          })
      );
    } else {
      return setAvatarMsg('Please select a jpeg or png image');
    }
  };

  return (
    <FormContainer>
      <CloseFormButton />
      <FormHeader>Create an account</FormHeader>
      <Form onSubmit={handleSubmit}>
        <>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </>
        <>
          <Label htmlFor="email">Your email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
        <>
          <Label htmlFor="password">Your password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
        <>
          <Label htmlFor="confirmPassword">Confirm your password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
        <>
          {avatarMsg && <ErrorMsg>{avatarMsg}</ErrorMsg>}
          <Label htmlFor="avatar">Upload a profile picture</Label>
          <Input
            type="file"
            name="avatar"
            id="avatar"
            ref={fileUploadRef}
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </>
        {isLoading && <Loading />}
        {message && <ErrorMsg>{message}</ErrorMsg>}
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <SubmitFormButton>Create your account</SubmitFormButton>
        <FormLink
          to="/login"
          child1={'Already a MuseMaster?'}
          child2={'Log in'}
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

export default CreateAcctPage;
