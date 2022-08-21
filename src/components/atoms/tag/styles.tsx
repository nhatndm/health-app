import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const TagWrapper = styled.span`
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  color: ${(props: StyledTheme) => props.theme.primary.orange[400]};
  margin-right: 5px;
`;
