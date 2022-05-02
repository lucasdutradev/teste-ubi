import { HeaderContainer } from "./styled";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <h1>Beer Garden</h1>
        </Link>
        <Link to="/myPage">
          <div className="user-click">
            <FaRegUser />
          </div>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
