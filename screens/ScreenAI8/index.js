javascript;
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
const DATA = [{
  id: '1',
  title: 'Item 1'
}, {
  id: '2',
  title: 'Item 2'
}, {
  id: '3',
  title: 'Item 3'
}];

const Item = ({
  title
}) => <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>;

const App = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} />;

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.headerText}>Header</Text>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B0082',
    padding: 10
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 10
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 18
  }
});
export default App;