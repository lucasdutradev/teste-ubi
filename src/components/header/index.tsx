import { HeaderContainer } from "./styled";
import { FaRegUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleSubmit = () => {
    return history.push("/myPage");
  };
  return (
    <HeaderContainer>
      <div className="container">
        <h1>Beer Garden</h1>
        <div className="user-click">
          <FaRegUser onClick={handleSubmit} />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
