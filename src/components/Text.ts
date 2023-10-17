import styled from 'styled-components/native';

import { TextProps } from 'react-native';

interface TextCustomProps extends TextProps {
  weight?: 400 | 600 | 700;
  color?: string;
  size?: number;
  opacity?: number;
  align?: 'left' | 'center' | 'right';
}

const Text = styled.Text<TextCustomProps>`
  color: ${({ color }: any) => color || '#000'};
  font-size: ${({ size }: any) => (size ? `${size}px` : '16px')};
  font-weight: ${({ weight }: any) => (weight ? `${weight}` : 400)};
  opacity: ${({ opacity }: any) => opacity || 1};
  text-align: ${({ align }: any) => align || 'center'};
`;

export default Text;
