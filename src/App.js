import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Alert
} from 'react-native';
import Toast from 'react-native-simple-toast';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppHeader } from './components/header'
import { TasksList } from './components/tasksList'
import { AddTask } from './components/addTask'
import { TasksProgess } from './components/taskProgress'




const App = () => {
  const [count, setCount] = useState(0)
  const [tasks, setTask] = useState(['Buy Grocery','Do excercise', 'Learn React-Native'])

  useEffect( () => {
    Alert.alert('Welcome!' ,'Stay Productive throught day by using this app', [{'text': 'Sure'}])
  }, [])

  const increaseCount = () => setCount(count+1)
  const decreaseCount = (count) => setCount(count-1)
  const addTask = (newTask) => {
    if (!newTask) {
      Toast.showWithGravity(`Task can't be empty.`, Toast.LONG, Toast.TOP);
      return false;
    }
    setTask((preTasks) => {
      return [
        newTask,
        ...preTasks
      ]  
    })
    Toast.showWithGravity('New task added.', Toast.LONG, Toast.TOP);
    
  } 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <AppHeader title={"Stay Productive"}/>
          <View style={styles.body}>
            <TasksList tasks={tasks}/>
            <TasksProgess count={count} updateCount={setCount} tasks={tasks} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
            <AddTask addNewTask={addTask}/>
          </View>          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
    color: Colors.white
  },
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    margin: 10
  },
});

export default App;
