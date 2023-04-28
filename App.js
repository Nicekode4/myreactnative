import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import FlatButton from './button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Todolist</Text>
        <Image
        style={styles.headerImg}
        source={require('./assets/favicon.png')}
        />
      </View>
      <Text>Indstast opgave</Text>
      <View style={styles.inputs}>
        <TextInput
        style={styles.input}
        placeholder="opgave titel"
        ></TextInput>
        <Button
        style={styles.button} 
        title={"?"}>?</Button>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.taskContainer}>
        
        <View style={styles.itemView}>
          <Text>Task one</Text>
          <View style={{
            borderRadius: '10rem',
          }}>
  <FlatButton text='-' />
          </View>
          
        </View>
        <View style={styles.itemView}>
          <Text>Task Two</Text>
<FlatButton text='-' />
        </View>
        <View style={styles.itemView}>
          <Text>Task Three</Text>
<FlatButton text='-' />
        </View>
        <View style={styles.itemView}>
          <Text>Task Four</Text>
          <FlatButton text='-' />
        </View>
        <View style={styles.itemView}>
          <Text>Task Five</Text>
<FlatButton text='-' />
        </View>
      </View>
      <View style={styles.footer}>       
      <Image
        style={styles.footerImg}
        source={require('./assets/icon.png')}
        />
        <View>
        <Text>footer</Text>
        <Text>footer</Text>
        <Text>footer</Text>
        <Text>footer</Text>
        </View>
 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: '#20232a',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#61dafb',
    color: '#20232a',
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    color: '#20232a',
  },
  inputs: {
    flexDirection: "row",
    backgroundColor: 'red',
    width: "100%",
    
  },
  input:
    {
      backgroundColor: 'blue',
      marginRight: '10vw',
    },
    button:
    {
      backgroundColor: 'yellow',
      margin: '10vh',
    },
    spacer: {
      backgroundColor:'black',
      height: '0.1vh',
      marginTop: '0.5vh'
    },
    itemView:{
      flexDirection: "row",
      margin: '0.5vh',
      paddingHorizontal: '1rem',
      paddingVertical: '0.5rem',
      borderColor: 'black',
      borderWidth: 1,
      width: '90%',
      backgroundColor: 'yellow',
    },
    itemBtn:{
      margin: 100,
    },
    headerImg: {
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      margin: '0.5rem',
      marginLeft: '19rem',
    },
    footerImg: {
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      margin: '0.5rem',
      marginRight: '19rem',
    }
});
