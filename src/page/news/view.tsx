import React, { FC } from 'react';

// VIEW
import New from 'view/new';

// STYLES
import { NewsWrapper } from './styles';

const NewsPage: FC = () => {
  return (
    <NewsWrapper>
      <New />
    </NewsWrapper>
  );
};

export default NewsPage;
