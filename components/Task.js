import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Task = (props) => {
    const [checked, setChecked] = useState(false);

    const completeTask = () => {
        setChecked(!checked);
    }

    return (
        <View style = {styles.box}>
           <View style = {styles.leftside}>
                <Text style={[styles.taskText, checked && styles.taskTextChecked]}>
                    {props.name}
                </Text>
           </View>
           <View style={styles.rightside}>
                <TouchableOpacity onPress={completeTask}>
                    <View style={[styles.check, checked && styles.checkFilled]} />
                </TouchableOpacity>
                <Text style={[styles.taskText, checked && styles.taskTextChecked]}>{props.category}</Text>
            </View>
        </View>
    )
}

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
    check:{
        width:12,
        height:12,
        borderColor: '#CEE6F2',
        borderWidth:2,
        borderRadius:5,
    },
    taskTextChecked: {
        textDecorationLine: 'line-through',
        color: '#CEE6F2',
    },
    check: {
        width: 20,
        height: 20,
        borderColor: '#CEE6F2',
        borderWidth: 2,
        borderRadius: 5,
    },
    checkFilled: {
        backgroundColor: '#CEE6F2',
    },
    rightside: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        gap:8
    }

});

export default Task;