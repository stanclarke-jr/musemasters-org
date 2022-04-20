import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';

import React from 'react';

const CloseFormButton = () => {
  let navigate = useNavigate();

  return (
    <CloseButtonWrapper>
      <CloseButton type="button" onClick={() => navigate('/')}>
        <CloseIcon />
      </CloseButton>
    </CloseButtonWrapper>
  );
};

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  color: rgb(156 163 175);
  padding: 0.25rem;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    color: rgb(17 24 39);
    border-color: rgb(0 0 0);
  }
`;

export default CloseFormButton;
