import styled from 'styled-components';

const FormContainer = ({ children }) => {
  return (
    <Wrapper>
      <FormWrapper>{children}</FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: rgb(24 24 27);
  padding: 0.5rem;
`;
const FormWrapper = styled.div`
  max-width: 26rem;
  background-color: #fff;
  border-radius: 0.25rem;
  margin: 6rem auto;
  padding-bottom: 1.25rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export default FormContainer;
