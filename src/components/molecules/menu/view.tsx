import React, { FC } from 'react';

// MODEL
import { MenuItem } from 'model';

// STYLE
import { MenuDateWrapper, MenuItemWrapper } from './styles';

const View: FC<Omit<MenuItem, 'id' | 'when'> & { when?: string }> = ({ when, date, image }) => (
  <MenuItemWrapper backgroundImage={image}>
    <MenuDateWrapper>
      {date} {when?.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
    </MenuDateWrapper>
  </MenuItemWrapper>
);

export default View;
