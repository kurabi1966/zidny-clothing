import styled from "styled-components";

export const CeckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Field = styled.span`
  width: 25%;
`;

export const Quantity = styled(Field)`
  margin: 0 10px;
  display: flex;
`;

export const Italic = styled.i`
  cursor: pointer;
  padding-top: 5px;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
