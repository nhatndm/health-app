import styled from 'styled-components';
import { StyledTheme } from 'theme';

// IMAGES
import Img1 from 'assets/images/d01.jpg';

export const MyProgressWrapper = styled.div`
  height: 316px;
  background-image: url(${Img1});
  background-position: center;
  color: ${(props: StyledTheme) => props.theme.light};
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
