import {
  BalancePanel,
  Container,
  EntryList,
  EntrySummary,
} from '@src/components';
import React from 'react';
import { MainContent } from './styles';

export function Main() {
  return (
    <Container>
      <MainContent>
        <BalancePanel />
        <EntrySummary />
        <EntryList />
      </MainContent>
    </Container>
  );
}
