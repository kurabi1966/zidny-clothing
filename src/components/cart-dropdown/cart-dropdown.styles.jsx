import styled from "styled-components";
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Seperator = styled.span`
  height: 2px;
  background-color: black;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  margin: auto;
  padding-top: 20px;
`;
