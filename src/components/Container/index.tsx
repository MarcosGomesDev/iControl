import React from 'react';
import { ContainerScreen } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <ContainerScreen>{children}</ContainerScreen>;
}
