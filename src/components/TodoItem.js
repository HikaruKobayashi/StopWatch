import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const TodoItem = (props) => {
  const {
    text,
    onDelete,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text} >{text}</Text>
      </View>
      <Button 
        style={styles.deleteButton}
        onPress={onDelete}
      >
        Delete
      </Button>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
  },
  text: {
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default TodoItem;