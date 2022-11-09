import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

const ListData = [
{ name: "item 1", id: "1", completed: false},
{ name: "item 2", id: "2", completed: false},
{ name: "item 3", id: "3", completed: false},
]

export default function App() {
  const renderer = ({item}) => (
    <View>
      <Text>{ item.name } </Text>
      <Text>id: {item.id} </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style = {styles.inputGroup}>
        <TextInput style={styles.input} placeholder = 'add on item'/>
        <TouchableHighlight>
          <Text>ADD</Text>
        </TouchableHighlight>
      </View>
     <FlatList
     data = {ListData}
     renderItem = { renderer }
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: ConstantSourceNode.statusBarHeight,
    justifyContent: 'start',
  },
  inputGroup:{
    flexDirection:"row",
  },
  input: {
    flex: 1,
  },
});
