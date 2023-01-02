import React , {useEffect} from "react";
import { StyledContainer } from "../../styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./../../redux/Cake/CakeActions";
import { buyIceCream } from './../../redux/IceCream/CakeActions';

const Page3 = () => {
  const dispatch = useDispatch();


  const Cakes = useSelector((state: any) => state.cake.numOfCakes);
  const Icecreams = useSelector((state: any) => state.iceCream.numOfIceCreams);
  
  useEffect(() => {
  }, [])
  
  return (
    <StyledContainer className="" style={{ background: "" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Cakes</h2>
        <div>
          <h4>Number of cakes - {Cakes}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            <button onClick={() => dispatch(buyCake(1))}> Buy Cake</button>
          </div>
        </div>

        <br />
        <br />
        <br />
        <h2>Icecreams</h2>

        <div>
          <h4>Number of cakes - {Icecreams}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            <button onClick={() => dispatch(buyIceCream(3))}> Buy Cake</button>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Page3;
