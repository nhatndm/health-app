import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const ExerciseItemWrapper = styled.div``;

export const TitleWithDotWrapper = styled.div`
  display: flex;
`;

export const MainTitleWithDurationWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 1px solid ${(props: StyledTheme) => props.theme.gray[400]};
  padding-bottom: 5px;
`;

export const MainTitleWrapper = styled.div`
  color: ${(props: StyledTheme) => props.theme.light};
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
`;

export const DurationWrapper = styled.div`
  color: ${(props: StyledTheme) => props.theme.primary.yellow[300]};
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export const UsedKcal = styled.div`
  color: ${(props: StyledTheme) => props.theme.primary.yellow[300]};
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;

export const DotWrapper = styled.div`
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props: StyledTheme) => props.theme.light};
  margin-right: 5px;
`;
