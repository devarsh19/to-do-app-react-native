import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

export const AddTask = ({ addNewTask }) => {
    const [text, setText] = useState('')

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Add new task</Text>
            <View style={styles.textInputView}>
            <TextInput style={styles.textInput} onChangeText={text => setText(text)} placeholder="ex: Go to gym or Zoom call with client" placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.sectionContainer}>
              <Button style= {styles.button} title="Add" onPress={() => addNewTask(text)}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.white,
    },
    textInputView: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: Colors.white
      },
      textInput: {
        color: 'white'
      }
  });
