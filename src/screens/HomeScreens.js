import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Button
        title="Record"
        onPress={() => navigation.navigate('StopWatch')}
      />
      <Button
        title="StopWatch"
        onPress={() => navigation.navigate('StopWatch')}
      />
       <Button
        title="Report"
        onPress={() => navigation.navigate('Report')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 0);'
  }
})