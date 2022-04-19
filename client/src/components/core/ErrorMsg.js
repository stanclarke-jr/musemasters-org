import styled from 'styled-components';

const ErrorMsg = ({ children }) => {
  return <Alert role="alert">{children}</Alert>;
};

const Alert = styled.div`
  font-size: 0.875rem;
  color: rgb(185 28 28);
  text-align: center;
  background-color: rgb(254 226 226);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem;
`;

export default ErrorMsg;
