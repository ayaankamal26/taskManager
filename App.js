import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.taskwrap}>
        <Text style = {styles.titles}>Today's Tasks</Text>
        <View style = {styles.tasks}>
          {/*Put today's tasks here*/}
          <Task name={'submit DSA PA'}/>
          <Task name = {'Pay rent'}/>
        </View>
        <Text style = {styles.titles}>Future Tasks</Text>
        <View style = {styles.tasks}>
          {/*Put future tasks here include dates?*/}
        </View>
      </View>
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
  }
  
});
