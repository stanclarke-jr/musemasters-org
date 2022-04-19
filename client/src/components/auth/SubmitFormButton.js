import styled from 'styled-components';

import React from 'react';

const SubmitFormButton = ({ children }) => {
  return (
    <SubmitButtonWrapper>
      <SubmitButton type="submit">{children}</SubmitButton>
    </SubmitButtonWrapper>
  );
};

const SubmitButtonWrapper = styled.div`
  margin-top: 2.5rem;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  background-color: #f40058cc;
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #f40058dd;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #f4005866;
  }
`;

export default SubmitFormButton;
