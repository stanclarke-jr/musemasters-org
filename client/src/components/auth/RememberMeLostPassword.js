import styled from 'styled-components';

const RememberMeLostPassword = () => {
  return (
    <FlexContainer>
      <RememberMeContainer>
        <CheckboxWrapper>
          <Checkbox id="remember" aria-describedby="remember" type="checkbox" />
        </CheckboxWrapper>
        <LabelWrapper>
          <RememberMeLabel htmlFor="remember">Remember me</RememberMeLabel>
        </LabelWrapper>
      </RememberMeContainer>
      <Link href="#!">Lost Password?</Link>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RememberMeContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
`;
const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
`;
const LabelWrapper = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.75rem;
`;
const RememberMeLabel = styled.label`
  color: rgb(17 24 39);
  font-weight: 500;
`;
const Link = styled.a`
  font-size: 0.875rem;
  color: rgb(29 78 216);

  &:hover {
    text-decoration: underline;
  }
`;

export default RememberMeLostPassword;
