import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn('Component mount');
  }, []); //If you want to call this useEffect on specific state update then pass those states in []

  return (
    <View>
      <Text style={styles.tCenter}>{`Current Count :->> ${count}`}</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text style={styles.touchableStyle}>Update Count</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tCenter: {
    padding: 50,
    textAlign: 'center',
  },
  touchableStyle: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
    width: 370,
    marginStart: 10,
    backgroundColor: '#007bff',
  },
});

export default App;
