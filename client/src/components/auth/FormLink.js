import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormLink = ({ to, child1, child2 }) => {
  return (
    <LinkWrapper>
      {child1}{' '}
      <StyledLink to={to} href="#!">
        {child2}
      </StyledLink>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  font-size: 0.8975rem;
  color: rgb(107 114 128);
  font-weight: 500;
`;
const StyledLink = styled(Link)`
  font-size: 0.875rem;
  color: rgb(29 78 216);

  &:hover {
    text-decoration: underline;
  }
`;

export default FormLink;
