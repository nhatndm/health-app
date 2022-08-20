import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const CircleProgressBarWrapper = styled.div`
  .MuiCircularProgress-svg {
    color: ${(props: StyledTheme) => props.theme.light};
  }

  .MuiCircularProgress-circle {
    stroke-width: 1;
  }
`;
