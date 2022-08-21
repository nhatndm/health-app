import React, { FC } from 'react';

// STYLES
import { IconWrapper, TextWrapper } from './styles';

interface IProps {
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text?: string;
  onClick?: () => void;
  nonFlex?: boolean;
}

const Icon: FC<IProps> = ({ IconComponent, text = '', onClick, nonFlex }) => (
  <IconWrapper haveOnClick={!!onClick} nonFlex={nonFlex} onClick={onClick}>
    <IconComponent />
    {text.length > 0 && <TextWrapper className="icon-text">{text}</TextWrapper>}
  </IconWrapper>
);

export default Icon;
