import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const ButtonWrapper = styled.button`
  min-height: 56px;
  min-width: 100px;
  background: linear-gradient(
    32.95deg,
    ${(props: StyledTheme) => props.theme.linear.firstColor} 8.75%,
    ${(props: StyledTheme) => props.theme.linear.secondColor} 86.64%
  );
  border: none;
  color: ${(props: StyledTheme) => props.theme.light};
  font-weight: 300;
  font-size: 18px;
  padding-left: 30px;
  padding-right: 30px;

  &:hover {
    cursor: pointer;
  }
`;
