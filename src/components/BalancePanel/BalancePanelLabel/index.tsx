import React from 'react';
import Text from '@src/components/Text';
import { BalancePanelLabelContainer } from './styles';

export function BalancePanelLabel() {
  return (
    <BalancePanelLabelContainer>
      <Text size={18}>Saldo atual</Text>
      <Text size={22}>$2.102,45</Text>
    </BalancePanelLabelContainer>
  );
}
