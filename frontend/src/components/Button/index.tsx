import React from 'react';

import { StyledButton } from './styles';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  size?: 'regular' | 'table' | 'small';
  design?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  disabled = false,
  children,
  size = 'regular',
  design = 'filled',
  color = 'primary',
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      design={design}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
