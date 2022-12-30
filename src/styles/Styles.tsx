import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 96vw;
  height: 95vh;
  overflow: scroll;
  overflow-x: hidden;
  /* margin: 10px auto; */
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* background: #ffffff; */
  background: #e1e4ee;
  color: #2d2d2d;

  .row-wrapper {
    color: #2a2a2a;
  }
  .row-wrapper-Header {
    /* margin: 12px; */
    /* background:wheat; */
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;

    /* border-bottom:1px solid gray */
    /* background:orange */
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px;
    border-radius: 8px;
    color: #2d2d2d;

    span {
      color: #434343;
    }
    small {
      color: #494949;
    }
  }

  .row-wrapper-nav {
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    .content {
      justify-content: center;
      align-items: center;
      color: white;
      color: #1a1818;
      /* border:none; */
    }
  }

  .row-wrapper-collapse {
    padding-bottom: 10px;
    border-bottom: 1px solid #cccccc;
    /* height:100%; */
    &:last-child {
      border: none;
    }

    .row-wrapper .content {
      flex-direction: column;
      background: pink;
      align-items: start;
      justify-content: space-between;
      color: white;
      color: #1a1818;
      border-radius: 10px;
      background: #ffffff;
      height: 100%;
      /* box-shadow: 6px 6px 12px #e0e0e0, -6px -6px 12px #ffffff; */
      div {
        width: 90%;
        display: flex;
        gap: 12px;
        align-items: start;
        span {
          display: flex;
          flex-direction: column;
        }
      }
      .content-footer {
        background: green;
        width: 100%;
        display: flex;
        justify-content: end;
      }
    }
    .ant-collapse .ant-collapse-item .ant-collapse-header {
      /* background:orange!important; */
      width: 220px;
      color: #1a1818;
    }
  }
  .Test-Card {
    border-radius: 10px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ant-collapse>.ant-collapse-item >.ant-collapse-header {
    width:200px;
   }

 
`;
