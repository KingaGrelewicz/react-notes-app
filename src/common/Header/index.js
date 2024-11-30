import { MdLightMode } from "react-icons/md";
import { HeaderButton, HeaderContainer, HeaderTitle } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Notes</HeaderTitle>
      <HeaderButton>
        <MdLightMode size="32px" />
      </HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
