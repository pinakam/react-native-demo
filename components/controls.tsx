import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Controls = () => {
  const handleOnPressedButton = () => {
    // For check log you've to see metro server console
    console.warn('You pressed the button');
  };

  const handleTextInputChange = (text: string) => {
    // For check log you've to see metro server console
    console.warn('You typed ======= ', text);
  };

  const handleOnPressedTouchable = () => {
    // For check log you've to see metro server console
    console.warn('You pressed the touchable button');
  };

  return (
    <View>
      {/*  Label/Text  */}
      <Text style={styles.textStyle}>This is Label/Text Control</Text>
      <View style={{padding: 10}}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Type here..."
          onChangeText={handleTextInputChange}
        />
      </View>
      {/*Button control, and for the default button we can not apply styling*/}
      <Button
        title="Touch Me"
        onPress={handleOnPressedButton}
        color="lightblue"
      />

      <View style={styles.mTop}>
        <TouchableOpacity style={styles.touchableStyle} onPress={handleOnPressedTouchable}>
          <Text style={styles.tCenter}>Touch Me, I'm Touchable</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mTop: {
    marginTop: 10,
  },
  tCenter: {
    textAlign: 'center',
  },
  textStyle: {
    margin: 50,
    textAlign: 'center',
  },
  textInputStyle: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  touchableStyle: {
    marginTop: 3,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#FFEE00',
    borderRadius: 10,
  },
});

export default Controls;
