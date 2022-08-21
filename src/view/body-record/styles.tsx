import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const BodyRecordWrapper = styled.div`
  padding: 16px 24px 16px 24px;
  background-color: ${(props: StyledTheme) => props.theme.dark[500]};
`;

export const RecordType = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  align-items: center;
  width: 56px;
  height: 24px;
  border-radius: 11px;
  color: ${(props) => (!props.active ? props.theme.primary.yellow[300] : props.theme.light)};
  background-color: ${(props) => (props.active ? props.theme.primary.yellow[300] : props.theme.light)};

  &:hover {
    cursor: pointer;
  }
`;

export const RecordTypeWrapper = styled.div`
  display: flex;
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
