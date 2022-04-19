import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

const Spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LoadingSpinner = styled.div`
  width: 5rem;
  height: 5rem;
  border: 5px solid #f4005855;
  border-top: 10px solid #f40058aa;
  border-radius: 50%;
  animation: ${Spinner} 1.5s linear infinite;
`;

export default Loading;
