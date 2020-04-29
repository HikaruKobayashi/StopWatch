import React from 'react'
import { Button, View, Text } from 'react-native'

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to StopWatch"
        onPress={() => navigation.navigate('StopWatch')}
      />
       <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}