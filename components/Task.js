import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Task = (props) => {
    //State for task completeness
    const [checked, setChecked] = useState(false);

    //boolean switch between complete and incomplete
    const completeTask = () => {
        setChecked(!checked);
    }

    return (
        <View style = {styles.box}>
           <View style = {styles.leftside}>
                <Text style={[styles.taskText, checked && {textDecorationLine: 'line-through', color: props.color}]}>
                    {/*Shows name of the task, starts as black and then changes to category color when it is complete*/}
                    {props.name}
                </Text>
           </View>
           <View style={styles.rightside}>
            {/*Changes state of task from between complete and incomplete*/}
                <TouchableOpacity onPress={completeTask}>
                    <View style={[{ width: 20, height: 20, borderColor: props.color, borderWidth: 2,borderRadius: 5,}, 
                        checked && {backgroundColor: props.color}]} />
                </TouchableOpacity>
                <Text style={[styles.taskText, checked && {textDecorationLine: 'line-through', color: props.color}]}>{props.category}</Text>
            </View>
        </View>
    )
}
//Stylings
const styles = StyleSheet.create({
    box:{
        backgroundColor:"#FFFFFF",
        padding:15,
        borderRadius:9,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between', 
        marginBottom:20,
    },
    leftside:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    taskText:{
        //maxWidth:'85%',
    },
    rightside: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        gap:8
    }

});

export default Task;