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
     
    </StyledContainer>
  );
};

export default Page3;
