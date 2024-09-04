import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [x, setX] = React.useState(0);
  function onIncrement() {
    setX(x + 1);
  }
  function onDecrement() {
    setX(x - 1);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello,{"\n"}  
          welcome to the application increment counter {"\n"}
          Count: {x}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>Click Here to Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={onDecrement}>
          <Text style={styles.buttonText}>Click Here to Increment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginLeft: "10%",
    marginTop: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  button1: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;