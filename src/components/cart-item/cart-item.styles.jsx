import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 20%;
  border-radius: 10px;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
`;

export const Name = styled.div`
  font-size: 16px;
`;
export const Total = styled.div`
  font-size: 12px;
`;
