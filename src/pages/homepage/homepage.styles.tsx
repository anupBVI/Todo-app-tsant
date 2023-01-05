import styled from "styled-components";

export const Wrapper = styled.div`
  background: #eaf6f6;
  padding: 12px;
`;
export const Container = styled.div`
  background: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding: 12px;
  gap: 1rem;
`;
export const Sidebar = styled.div`
  flex: 1;
  padding: 1rem;
`;
export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 5px;
  padding: 4px 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 12px;
  transition: 0.2s ease all;

  &:nth-child(1) {
    background: #d7e6eb;
  }
`;
export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  color: #37cef8;
  color: #a8a8af;
`;
export const NavItemName = styled.div`
  color: #a8a8af;
  &:nth-child(1) {
    color: #37cef8;
  }
`;

export const Content = styled.div`
  background: #e2f6fe;
  background: #f5f9fd;
  border-radius: 6px;
  flex: 5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
`;

export const ContentHeader = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.6rem;
  /* background: #000; */
`;

export const HeaderLeft = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  flex: 4;
  span {
    color: #575757;
    font-size: 1.7rem;
    letter-spacing: 0.08rem;
  }
`;

export const HeaderRight = styled.div`
  background: transparent;
  display: flex;
  justify-content: end;
  flex: 2;
`;
export const UserDetails = styled.div`
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 0.6rem;
  width: 70%;
  padding: 2px 7px;
`;

export const UserIcon = styled.div`
  background: #ebebeb;
  width: 40px;
  height: 40px;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #2b2b2b;
    font-size: 16px;

    &:nth-child(2) {
      color: gray;
      font-size: 13px;
    }
  }
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 12px;
`;

export const ContentCard = styled.div`
  height: 20rem;
  border-radius: 20px;
  background: #2a9e81;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.06);
  }

  &:nth-child(2) {
    background: #f9902e;
  }
  &:nth-child(1) {
    background: #2ef9e8;
  }
  &:nth-child(3) {
    background: #f84242;
  }

  &.breaker{
    background: #000;
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  color: white;
`;
export const CardTime = styled.div`
  color: white;
  letter-spacing: 0.2rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const CardName = styled.div`
  color: white;
  letter-spacing: 0.1rem;
  font-size: 14px;
`;

export const Row3 = styled.div`
  margin: 2px auto;
  width: 93%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  align-items: center;
  padding: 12px;
`;

export const Left = styled.div``;
export const BreakTitle = styled.div`
  font-weight: bold;
  color: #535353;
  letter-spacing: 0.1rem;
`;
export const BreakTime = styled.div`
  font-size: 13px;
  color: #808080;
`;
export const Right = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RightIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    background: #167060;
    color: #fff;
  }
`;

export const BreakRow = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
`;

