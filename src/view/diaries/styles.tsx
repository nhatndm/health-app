import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const TitleWrapper = styled.div`
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: ${(props: StyledTheme) => props.theme.dark[500]};
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;
