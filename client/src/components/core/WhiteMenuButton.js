import styled from 'styled-components';

const WhiteMenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <i className="fa fa-bars"></i>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 2rem;
  color: #fff;
  cursor: pointer;
`;

export default WhiteMenuButton;
