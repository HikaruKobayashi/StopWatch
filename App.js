import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import ReportScreen from './src/screens/ReportScreen';
import HomeScreen from './src/screens/HomeScreens';
import HomeBar from './src/screens/HomeBar';
import Header from './src/screens/Header';
import TodoInput from './src/components/TodoInput';
import TodoItem from './src/components/TodoItem';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends React.Component {
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
      <PaperProvider>
        <Header />
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
        <HomeScreen />
        <HomeBar />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(200, 200, 200);',
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