import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const MenuItemWrapper = styled.div<{ backgroundImage: string }>`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  position: relative;
  height: 200px;
`;

export const MenuDateWrapper = styled.div`
  position: absolute;
  background-color: ${(props: StyledTheme) => props.theme.primary.yellow[300]};
  bottom: 0;
  left: 0;
  color: ${(props: StyledTheme) => props.theme.light};
  padding: 2px 15px 2px 5px;
`;
