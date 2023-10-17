import React from 'react';
import { BalancePanelChart } from './BalancePanelChart';
import { BalancePanelLabel } from './BalancePanelLabel';
import { BalancePanelContainer } from './styles';
import { PlusButton } from '../PlusButton';

export function BalancePanel() {
  return (
    <BalancePanelContainer>
      <BalancePanelLabel />
      <BalancePanelChart />
      <PlusButton />
    </BalancePanelContainer>
  );
}
