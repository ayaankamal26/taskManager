import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Task = (props) => {
    return (
        <View style = {styles.box}>
           <View style = {styles.leftside}>
                <Text style = {styles.taskText}>{props.name}</Text>
           </View>
           <View style={styles.check}></View>
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
    }

});

export default Task;