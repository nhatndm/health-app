import React, { FC, ReactNode } from 'react';

// STYLES
import { HexagonWrapper, HexagonWrapperContent } from './styles';

interface IProps {
  children: ReactNode;
}

const View: FC<IProps> = ({ children }) => (
  <HexagonWrapper>
    <HexagonWrapperContent>{children}</HexagonWrapperContent>
  </HexagonWrapper>
);

export default View;
