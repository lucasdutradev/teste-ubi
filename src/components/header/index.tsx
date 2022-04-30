import { HeaderContainer } from "./styled";
import { FaRegUser } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClick = () => history.push("/myPage");

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <h1>Beer Garden</h1>
        </Link>
        <div className="user-click">
          <FaRegUser onClick={handleClick} />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
