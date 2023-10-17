import React from 'react';
import { EntryListContainer } from './styles';
import { EntryListItem } from './EntryListItem';
import Text from '../Text';
import { FlatList } from 'react-native';

export function EntryList() {
  return (
    <EntryListContainer>
      <Text weight={700} size={22} style={{ marginVertical: 10 }}>
        Últimos Lançamentos
      </Text>
      <FlatList
        data={[
          { key: 'Padaria Asa Branca: $10' },
          { key: 'Supermercado Isadora: $190' },
          { key: 'Posto Ipiranga: $190' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
      <EntryListItem />
    </EntryListContainer>
  );
}
