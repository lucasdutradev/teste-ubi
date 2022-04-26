import { HeaderContainer } from "./styled";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Beer Garden</h1>
      <div className="user-click">
        <FaRegUser />
      </div>
    </HeaderContainer>
  );
};

export default Header;
