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

export const TasksList = ({ tasks }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Your To DOs </Text>
            <FlatList data={tasks} renderItem={ ({item}) => <Text style={styles.sectionDescription}>{item}</Text>}></FlatList>
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
  });
