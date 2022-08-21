import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const BlackBoxWrapper = styled.div`
  padding: 10px;
  height: 144px;
  background-color: ${(props: StyledTheme) => props.theme.dark[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 56px;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${(props: StyledTheme) => props.theme.gray[400]};
`;

export const BlackBoxTitle = styled.div`
  color: ${(props: StyledTheme) => props.theme.primary.yellow[300]};
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;

export const BlackBoxSubTitle = styled.div`
  color: ${(props: StyledTheme) => props.theme.light};
  font-family: Noto Sans JP;
  font-style: normal;
  font-size: 18px;
`;

export const ContentWrapper = styled.div`
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
