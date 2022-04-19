import styled from 'styled-components';

import React from 'react';

const FormHeader = ({ children }) => {
  return (
    <HeaderOneWrapper>
      <HeaderOne>{children}</HeaderOne>
    </HeaderOneWrapper>
  );
};

const HeaderOneWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
const HeaderOne = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  margin-top: 1.5rem;
`;

export default FormHeader;
