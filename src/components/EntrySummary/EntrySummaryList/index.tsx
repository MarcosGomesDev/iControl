import React from 'react';
import { EntrySummaryListContainer } from './styles';
import Text from '@src/components/Text';
import { FlatList } from 'react-native';

export function EntrySummaryList() {
  return (
    <EntrySummaryListContainer>
      <Text weight={700} size={22} style={{ marginVertical: 10 }}>
        Categorias
      </Text>
      <FlatList
        data={[
          { key: 'Alimentação: $200' },
          { key: 'Combustível: $12' },
          { key: 'Aluguel: $120' },
          { key: 'Lazer: $250' },
          { key: 'Outros: $1200' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </EntrySummaryListContainer>
  );
}
