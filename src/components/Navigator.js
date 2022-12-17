import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import homeIcon from "../images/home.png";
import homeSelectedIcon from "../images/homeselected.png";
import settingIcon from "../images/setting.png";
import analysisIcon from "../images/analysis.png";
import notificationIcon from "../images/notification.png"

const StyledNav = styled.div`
  width: 6.4rem;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0.5rem 0 0.5rem rgba(113, 122, 148, 0.1);
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 1.6rem;
`;

const UserContianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 1.6rem;
`;

const Icon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.4rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

const SmallIcon = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Avatar = faker.image.avatar(640, 480, true);

export default function Navigator(props) {
  return(
    <StyledNav>
      <MenuContainer>
        <Link to="/upstage-ui-design"><SmallIcon src={props.selected ? homeSelectedIcon : homeIcon} /></Link>
        <SmallIcon src={settingIcon} />
        <SmallIcon src={analysisIcon} />
      </MenuContainer>
      <UserContianer>
        <SmallIcon src={notificationIcon}/>
        <Icon src={Avatar}/>
      </UserContianer>
    </StyledNav>
  );
}