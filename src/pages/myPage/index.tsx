import ButtonDefault from "../../components/buttonDefault";
import Header from "../../components/header";
import { ContainDrinks } from "./styled";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MyPage = () => {
  return (
    <>
      <Header />
      <ContainDrinks>
        <div className="containTitle">
          <ButtonDefault>Back Home</ButtonDefault>
          <h1>Your perfect drinks</h1>
        </div>
        <div className="containDrinks">
          {/* {arr.map((element) => (
            <CardDrink />
          ))} */}
        </div>
      </ContainDrinks>
    </>
  );
};

export default MyPage;
