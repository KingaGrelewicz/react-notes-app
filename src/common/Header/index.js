import Theme from "../Theme";
import { HeaderContainer, HeaderTitle } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Notes</HeaderTitle>
      <Theme />
    </HeaderContainer>
  );
};

export default Header;
