import { styled } from "styled-components";

interface Props {
  alignItems?: string;
  justifyContent?: string;
}

export const Row = styled.div<Props>`
  display: block;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
`;
