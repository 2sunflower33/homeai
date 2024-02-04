import { styled } from "styled-components";

interface Props {
  alignItems?: string;
  justifyContent?: string;
}

export const Column = styled.div<Props>`
  width: 100%;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
`;
