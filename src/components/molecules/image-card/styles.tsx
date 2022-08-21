import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const ImageCardWrapper = styled.div<{ backgroundImage: string }>`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 20px solid ${(props: StyledTheme) => props.theme.primary.yellow[300]};
`;

export const ImageCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props: StyledTheme) => props.theme.dark[600]};
  opacity: 0.9;
`;

export const MainTitleWrapper = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  color: ${(props: StyledTheme) => props.theme.primary.yellow[300]};
  z-index: 1;
`;

export const SubTitleWrapper = styled.span`
  margin-top: 10px;
  font-family: Noto Sans JP;
  padding: 2px 10px 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: StyledTheme) => props.theme.light};
  background-color: ${(props: StyledTheme) => props.theme.primary.orange[400]};
  z-index: 1;
`;
