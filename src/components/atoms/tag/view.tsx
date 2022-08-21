import React, { FC } from 'react';

// STYLES
import { TagWrapper } from './styles';

interface IProps {
  tag: string;
}

const Tag: FC<IProps> = ({ tag }) => <TagWrapper>#{tag}</TagWrapper>;

export default Tag;
