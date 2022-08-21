import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const DiaryWrapper = styled.div`
  padding: 20px;
  border: 1px solid ${(props: StyledTheme) => props.theme.gray[400]};
  height: 200px;
`;

export const TitleWrapper = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${(props: StyledTheme) => props.theme.dark[500]};
  width: 100px;
`;

export const MainTitleWrapper = styled.div`
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
`;

export const ContentWrapper = styled.div`
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
`;
