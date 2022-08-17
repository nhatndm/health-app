import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const HeaderWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Noto Sans JP;
  min-height: 60px;
  background-color: ${(props: StyledTheme) => props.theme.dark[500]};
  display: flex;
  align-items: center;

  .icon-text {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const HamburgerIconWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  color: ${(props: StyledTheme) => props.theme.primary.orange[400]};
`;

export const HamburgerIcon = styled.span`
  position: absolute;
`;

export const HamburgerMenuContentWrapper = styled.div`
  width: 200px;
  color: ${(props: StyledTheme) => props.theme.light};
  background-color: ${(props: StyledTheme) => props.theme.gray[400]};
`;

export const HamburgerMenuContentItem = styled.div`
  padding: 20px 30px 20px 30px;
  font-size: 18px;
  font-weight: 300;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
