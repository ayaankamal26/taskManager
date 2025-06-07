import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, Keyboard, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

export default function App() {
  const [task, setTask] = useState();
  const [taskArray, setTaskArray] = useState([]);
  const addtask = () => {
    Keyboard.dismiss();
    setTaskArray([...taskArray, task]);
    setTask(null);
  }
  const DeleteTask = (index) => {
    let tasksCopy = [...taskArray];
    tasksCopy.splice(index, 1);
    setTaskArray(tasksCopy);
  }
  return (

    <View style={styles.container}>
      <View style = {styles.taskwrap}>
        <Text style = {styles.titles}>Today's Tasks</Text>
        <View style = {styles.tasks}>
          {/*Put today's tasks here*/}
          {
            taskArray.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onLongPress={() => DeleteTask(index)}>
                  <Task name ={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <Text style = {styles.titles}>Future Tasks</Text>
        <View style = {styles.tasks}>
          {/*Put future tasks here include dates?*/}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style = {styles.keyboardWrapper}>
        <TextInput style = {styles.input} placeholder = {"Enter a task"} value = {task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => addtask()}>
          <View style = {styles.addButton}>
            <Text style = {styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF4F2',
  },
  taskwrap: {
    paddingTop:80,
  },
  titles: {
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    color:'#31473A',
  },
  tasks: {
      marginTop:30,
  },
  keyboardWrapper: {
    position:'absolute',
    bottom:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal: 15,
    width:250,
    backgroundColor:'#FFFFFF',
    borderRadius:60,
    borderColor:'#31473A',
    borderWidth:1,
  },
  addButton:{
    width:50,
    height:50,
    backgroundColor:"FFFFFF",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'#31473A',
    borderWidth:1,
  }
  
});
