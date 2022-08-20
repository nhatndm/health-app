import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const ChartWrapper = styled.div`
  height: 316px;
  background-color: ${(props: StyledTheme) => props.theme.dark[600]};
`;
