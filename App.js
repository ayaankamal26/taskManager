import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, Keyboard, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [task, setTask] = useState();
  const [taskArray, setTaskArray] = useState([]);
  const [categories, setCategories] = useState(['General', 'Work', 'School', 'Personal']);
  const [category, setCategory] = useState('General');
  const [newCategory, setNewCategory] = useState('');
  const [categoryColors, setCategoryColors] = useState({});
  const getRandomColor = () => {
  const colors = ['#FF80ED', '#065535', '#FFC0CB', '#008080', '#FFA500', '#40EODO', '#FF7373', '#800080', '#800000', 'DAA520', '#8A2BE2'];
  return colors[Math.floor(Math.random() * colors.length)];
};
  const addtask = () => {
  Keyboard.dismiss();
  const finalCategory = newCategory.trim() !== '' ? newCategory : category;
  if (task && finalCategory) {
    if (!categories.includes(finalCategory)) {
      setCategories([...categories, finalCategory]);
    }
    const newTask = { name: task, category: finalCategory };
    setTaskArray([...taskArray, newTask]);
    setTask(null);
    setNewCategory('');
    setCategory('General');
  }
};
  const DeleteTask = (index) => {
    let tasksCopy = [...taskArray];
    tasksCopy.splice(index, 1);
    setTaskArray(tasksCopy);
  }
  return (

    <View style={styles.container}>
      <View style = {styles.taskwrap}>
        <Text style = {styles.titles}>Today's Tasks</Text>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 100 }}>
          {
            taskArray.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onLongPress={() => DeleteTask(index)}>
                  <Task name ={item.name} category = {item.category}/>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style = {styles.keyboardWrapper}>
        <TextInput style = {styles.input} placeholder = {"Enter a task"} value = {task} onChangeText={text => setTask(text)}/>
        <View style={styles.categoryAddContainer}>
        <TextInput
          style={styles.categoryInput}
          placeholder="Category"
          value={newCategory}
          onChangeText={text => setNewCategory(text)}
        />
        </View>
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
  },
  scrollContainer: {
  maxHeight: '90%', // You can adjust this number as needed
  marginTop: 30,
  paddingHorizontal: 20,
  },
  categoryText: {
    fontSize:16,
    color:'#31473A'
  },
});
