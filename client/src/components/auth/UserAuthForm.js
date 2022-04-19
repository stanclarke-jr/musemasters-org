import styled from 'styled-components';

const UserAuthForm = ({ action, children }) => {
  <Form action={action}>{children}</Form>;
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

export default UserAuthForm;
