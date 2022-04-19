import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <LogoWrapper>
      <Image src={logo} alt="" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  flex-shrink: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 3rem;
  padding-top: 0.5rem;
`;

export default Logo;
