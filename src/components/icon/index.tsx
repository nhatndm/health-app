import React, { FC } from 'react';

// STYLES
import { IconWrapper, TextWrapper } from './styles';

interface IProps {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text?: string;
  onClick?: () => void;
}

const Icon: FC<IProps> = ({ IconComponent, text = '', onClick }) => (
  <IconWrapper haveOnClick={!!onClick} onClick={onClick}>
    <IconComponent />
    {text.length > 0 && <TextWrapper className="icon-text">{text}</TextWrapper>}
  </IconWrapper>
);

export default Icon;
