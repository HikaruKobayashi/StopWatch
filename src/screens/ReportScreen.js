import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Button2 } from 'react-native-paper';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text>WelCome ReportScreen</Text>
      <Button2
        title="go to Home"
        onPress={() => {
          this.props.navigation.navigate('Home')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});