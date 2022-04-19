import styled from 'styled-components';

const Label = ({ htmlFor, children }) => {
  return <FormLabel htmlFor={htmlFor}>{children}</FormLabel>;
};

const FormLabel = styled.label`
  display: block;
  color: rgb(17 24 39);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`;

export default Label;
