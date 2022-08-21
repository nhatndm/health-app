import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const ExerciseWrapper = styled.div`
  padding: 16px 24px 16px 24px;
  background-color: ${(props: StyledTheme) => props.theme.dark[500]};
`;

export const MainTitle = styled.span`
  font-size: 15px;
  width: 96px;
`;

export const DateWrapper = styled.span`
  font-size: 22px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: ${(props: StyledTheme) => props.theme.light};
`;
