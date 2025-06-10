import { KeyboardAvoidingView, Platform, Keyboard, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

export default function App() {
  //states for different variables including tasks, categories, and colors
  const [task, setTask] = useState();
  const [taskArray, setTaskArray] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('General');
  const [newCategory, setNewCategory] = useState('');
  const [categoryColors, setCategoryColors] = useState({});
  const [availableColors, setAvailableColors] = useState(['#FF80ED', '#065535', '#FFC0CB', '#008080', '#FFA500', '#40EODO', '#FF7373', '#800080', '#800000', '#DAA520', '#8A2BE2', 
    '#000080', '#FAEBD7', '#A47864', '#BB2649', '#FF6F61', '#92A8D1']);
  //get's random color based on previously declared list of colors
  const getRandomColor = () => {
    //in case there are more categories than colors
    if (availableColors.length === 0) {
      return '#000000';
    }
    //get random color and delete it from the list
    const index = Math.floor(Math.random() * availableColors.length);
    const selectedColor = availableColors[index];
    const newColors = [...availableColors];
    newColors.splice(index, 1);
    setAvailableColors(newColors);
    return selectedColor;
};
  const addtask = () => {
  Keyboard.dismiss();
  //checks if the entered category already exists and assigns color if it has not  been 
  const finalCategory = newCategory.trim() !== '' ? newCategory : category;
  if (task && finalCategory) {
    let color = categoryColors[finalCategory];
    if (!categories.includes(finalCategory)) {
      color = getRandomColor();
      setCategories([...categories, finalCategory]);
      setCategoryColors({ ...categoryColors, [finalCategory]: color });
    }
    //creates new task and adds to the array
    const newTask = { name: task, category: finalCategory, color };
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
            //displays all tasks within the array
            taskArray.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onLongPress={() => DeleteTask(index)}>
                  <Task name ={item.name} category = {item.category} color = {item.color}/>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style = {styles.keyboardWrapper}>
        {/*Allows user to input text to both task name and category*/}
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
          {/*Handles adding task once information has been filled out*/}
          {/*If no name is given, nothing is added and if no category is provided, default is General*/}
          <View style = {styles.addButton}>
            <Text style = {styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
//Stylings
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
    backgroundColor:"#FFFFFF",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'#31473A',
    borderWidth:1,
  },
  scrollContainer: {
  maxHeight: '90%',
  marginTop: 30,
  paddingHorizontal: 20,
  },
  categoryText: {
    fontSize:16,
    color:'#31473A'
  },
});
