import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

export default class TodoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  _delete = (index) => () => {
    const list = [].concat(this.state.list);
    list.splice(index, 1);

    this.setState({
      list,
    });
  }

  _onPress = (text) => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
    });

    this.setState({
      list,
    });
  }

  render() {
    const {
      list,
    } = this.state

    return (
      <View style={styles.main} >
        <TodoInput onPress={this._onPress} />
        <View style={styles.todoListContainer} >
          <FlatList
            style={styles.todoList}
            data={list}
            renderItem={({ item, index }) => (
              <TodoItem 
                onDelete={this._delete(index)}
                {...item}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(13, 13, 13);',
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});