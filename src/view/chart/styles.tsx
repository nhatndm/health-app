import styled from 'styled-components';

export const ChartWrapper = styled.div<{ height?: number; color?: string }>`
  height: ${(props) => (props.height ? `${props.height}px` : '316px')};
  background-color: ${(props) => (props.color ? props.color : props.theme.dark[600])};
`;
