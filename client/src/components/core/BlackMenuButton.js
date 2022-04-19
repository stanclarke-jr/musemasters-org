import styled from 'styled-components';

const BlackMenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <i className="fa fa-bars"></i>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #000;
  margin-right: 2rem;
  cursor: pointer;
`;

export default BlackMenuButton;
