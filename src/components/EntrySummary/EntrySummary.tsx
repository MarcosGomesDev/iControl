import React from 'react';
import { EntrySummaryList } from './EntrySummaryList';
import { EntrySummaryContainer } from './styles';
import { EntrySummaryChart } from './EntrySummaryChart';

export function EntrySummary() {
  return (
    <EntrySummaryContainer>
      <EntrySummaryChart />
      <EntrySummaryList />
    </EntrySummaryContainer>
  );
}
