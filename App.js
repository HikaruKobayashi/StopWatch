import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReportScreen from './src/screens/ReportScreen';
import HomeScreen from './src/screens/HomeScreens';
// import Footer from './src/screens/Footer';
// import Header from './src/screens/Header';
import StopWatch from './src/screens/StopWatch';
import TodoScreen from './src/screens/TodoScreen';
// import { Provider as PaperProvider } from 'react-native-paper';


const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Record: {screen: TodoScreen },
    StopWatch: {screen: StopWatch },
    Report: { screen: ReportScreen }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)