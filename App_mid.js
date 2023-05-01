import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
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