import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

export const TasksProgess = (props) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Your have completed {props.count} tasks </Text>
            <Text style={styles.sectionDescription}>{Math.floor(props.count/props.tasks.length*100)} % of your daily target </Text>
            
            <Button style={styles.button} onPress={props.count < props.tasks.length ?  props.increaseCount : null} title="Task Complete">Task Complete</Button>
            
            <Button onPress={() => props.count > 0 ? props.decreaseCount(props.count) : props.updateCount(0)} title="Redo Task">Redo Task</Button>
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
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.light,
    },
    button: {
      marginBottom: 10
    }  
  });
