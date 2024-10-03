import styled from '@emotion/styled';

import { ButtonProps } from './index';

const sizeStyles = {
  regular: `
    height: 40px;
    font-size: 16px;
  `,
  table: `
    height: 48px;
    font-size: 16px;
    width: 100%;
  `,
  small: `
    height: 32px;
    font-size: 14px;
  `,
};

const colorStyles = {
  primary: {
    filled: `
      background-color: #4546D9;
      color: white;
      border: none;
    `,
    outlined: `
      background-color: transparent;
      border: 2px solid #4546D9;
      color: #4546D9;
    `,
    text: `
      background-color: transparent;
      color: #4546D9;
      border: none;
    `,
  },
  secondary: {
    filled: `
      background-color: #DE1AE2;
      color: white;
      border: none;
    `,
    outlined: `
      background-color: transparent;
      border: 2px solid #DE1AE2;
      color: #DE1AE2;
    `,
    text: `
      background-color: transparent;
      color: #DE1AE2;
      border: none;
    `,
  },
  tertiary: {
    filled: `
      background-color: #03DAC6;
      color: white;
      border: none;
    `,
    outlined: `
      background-color: transparent;
      border: 2px solid #03DAC6;
      color: #03DAC6;
    `,
    text: `
      background-color: transparent;
      color: #03DAC6;
      border: none;
    `,
  },
};

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-variant: small-caps;
  letter-spacing: 0.05em;
  ${(props) => sizeStyles[props.size || 'regular']}
  ${(props) => colorStyles[props.color || 'primary'][props.design || 'text']}
`;
