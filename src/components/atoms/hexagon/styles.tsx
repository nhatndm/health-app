import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const HexagonWrapper = styled.div`
  position: relative;
  float: left;
  width: 100px;
  height: 90px;
  padding: 12px;
  transform: rotate(90deg);
  margin: 4px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(
    32.95deg,
    ${(props: StyledTheme) => props.theme.linear.firstColor} 8.75%,
    ${(props: StyledTheme) => props.theme.linear.secondColor} 86.64%
  );
  -webkit-clip-path: polygon(25px 0px, calc(100% - 25px) 0px, 100% 50%, calc(100% - 25px) 100%, 25px 100%, 0px 50%);
`;

export const HexagonWrapperContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  color: ${(props: StyledTheme) => props.theme.light};
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
`;
