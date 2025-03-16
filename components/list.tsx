import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

interface Person { name: string, age: number }

const family: Person[] = [
    { name: 'Kyle', age: 33 },
    { name: 'Kalena', age: 33 },
    { name: 'Xavier', age: 7 },
    { name: 'Mya', age: 5 },
    { name: 'Caelan', age: 1 },
    { name: 'Raelena', age: 0 },
]

const ExampleList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={family}
        keyExtractor={(member) => member.name}
        renderItem={({item}) => 
            <Text style={styles.item}>{item.name}</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ExampleList;