import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WhiteMenuButton from './WhiteMenuButton';
import Logo from './Logo';
import profilePic from '../../assets/images/profile-pic_crop.jpg';

function NavBar({ currentUser, showSidebar, setShowSidebar }) {
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    document.querySelector('main').style.marginLeft = '288px';
    document.querySelector('main').style.filter = 'blur(0.25rem)';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    document.body.style.overflow = 'hidden';
  };

  console.log(currentUser);

  return (
    <Wrapper>
      <NavContainer>
        <Nav>
          <NavLeftWrapper>
            <WhiteMenuButton onClick={handleShowSidebar} />
            <Logo />
          </NavLeftWrapper>
          <NavRightWrapper>
            {!currentUser ? (
              <>
                <LoginButton type="button">
                  <StyledLink to="/login">Log In</StyledLink>
                </LoginButton>
                <CreateAcctButton>
                  <StyledLink to="/create-account">Create account</StyledLink>
                </CreateAcctButton>
              </>
            ) : (
              /* <NavRightDropdown> */
              /* <Link> */
              <Avatar src={profilePic} alt="" />
              /* </Link> */
              /* </NavRightDropdown> */
            )}
          </NavRightWrapper>
        </Nav>
      </NavContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(24 24 27);
  z-index: 10;
`;
const NavContainer = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;
const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const NavRightWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const LoginButton = styled.button`
  background-color: transparent;
  border-radius: 0.25rem;
  border: none;
  padding: 0.625rem 1.5rem;
  margin-right: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.15s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: #f4005899;
  }
  &:active,
  &:focus {
    background-color: #f4005866;
  }
`;
const CreateAcctButton = styled(LoginButton)`
  background-color: #f4005899;

  &:hover {
    background-color: #f4005877;
  }
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
// const NavRightDropdown = styled.div`
//   position: relative;
// `;
// const Link = styled.a`
//   display: flex;
//   align-items: center;
// `;
const Avatar = styled.img`
  border-radius: 50%;
  width: 1.6rem;
`;

export default NavBar;
