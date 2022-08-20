import React, { FC, MouseEvent, ReactNode } from 'react';

// STYLE
import { ButtonWrapper } from './styles';

interface IProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const Button: FC<IProps> = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
