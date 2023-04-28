import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
  ]);

  const [name , setName] = useState("")
function handleName() {
    let lel;
    lel = items
    lel.push({ id: lel.length + 1, text: name})
    setItems(lel)
    console.log(items);
setName("")
}
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.logo} />
        <Text style={styles.heading}>Welcome to my app!</Text>
        <Text style={styles.heading}>How are you {name ? name : "World"}?</Text>
        <TextInput style={styles.input} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <Button title="Submit" onPress={() => handleName()} />
        <FlatList
        style={styles.myFlat}
        numColumns={2}
          data={items}
          renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '80%',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  myFlat:{
    flexDirection: 'row',
  }
});
