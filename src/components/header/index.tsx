import { HeaderContainer } from "./styled";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <h1>Beer Garden</h1>
        <div className="user-click">
          <FaRegUser />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
