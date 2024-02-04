import { styled } from "styled-components";

interface Props {
  size: number;
}

export const Spacer = styled.div<Props>`
  flex-shrink: 0;
  width: ${(props) => props.size * 8}px;
  height: ${(props) => props.size * 8}px;
  min-width: ${(props) => props.size * 8}px;
  min-height: ${(props) => props.size * 8}px;
`;
