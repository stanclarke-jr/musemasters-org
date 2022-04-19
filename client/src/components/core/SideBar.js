import styled from 'styled-components';
import BlackMenuButton from './BlackMenuButton';
import Logo from './Logo';

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const handleHideSidebar = () => {
    setShowSidebar(!showSidebar);
    document.querySelector('main').style.marginLeft = '0';
    document.querySelector('main').style.filter = 'blur(0)';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.body.style.overflow = 'auto';
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <BlackMenuButton onClick={handleHideSidebar} />
        <Logo />
      </SidebarHeader>
      <div>
        <aside>
          <div>Instrument</div>
          <ListWrapper>
            <List>
              <ListItem>
                <Link href="#!">
                  <div>Guitar</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Piano</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Percussion</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Bass</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Flute</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Violin</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Saxophone</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Trumpet</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Clarinet</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <di>Cello</di>
                </Link>
              </ListItem>
            </List>
          </ListWrapper>
          <div>Genre</div>
          <ListWrapper>
            <List>
              <ListItem>
                <Link href="#!">
                  <div>Rock</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Jazz</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Blues</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Pop</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Country</div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#!">
                  <div>Electronic</div>
                </Link>
              </ListItem>
            </List>
          </ListWrapper>
        </aside>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  width: 20rem;
  height: 100%;
  background-color: #ffffff;
  padding-bottom: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 20;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 8px;
    border: 4px solid transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
    }
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding-left: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
  }
`;
const ListWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-top: 0.25rem 0;
  position: relative;
  width: 100%;
`;
const List = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.div`
  position: relative;
  width: 100%;

  &:hover {
    background-color: #ddd;
  }
`;
const Link = styled.a`
  color: rgb(15 23 42);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
`;

export default SideBar;
