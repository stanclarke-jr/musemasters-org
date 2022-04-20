import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavRightDropdown = () => {
  let navigate = useNavigate();

  return (
    <>
      <DropdownContent>
        <Link>Your profile</Link>
        <Link
          onClick={() => {
            localStorage.removeItem('userInfo');
            navigate('/');
            // TODO: Look into alternatives;
            window.location.reload();
          }}
        >
          Log out
        </Link>
      </DropdownContent>
    </>
  );
};

const DropdownContent = styled.ul`
  position: absolute;
  right: 0;
  background-color: #fffffe;
  min-width: 10rem;
  padding: 0;
  margin: 1.5rem 0 0;
  border-radius: 0.25rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
const Link = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  padding: 0.75rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    border-radius: 0.25rem;
  }
`;

export default NavRightDropdown;
