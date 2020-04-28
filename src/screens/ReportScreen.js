import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Button2 } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

// export default function ReportScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>WelCome ReportScreen</Text>
//       <Button2
//         title="go to Home"
//         onPress={() => {
//           this.props.navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// }

export default class App extends React.Component {
  // ラベルを設定
  labels = ['1月', '2月', '3月', '4月'];

  // グラフの色や線の設定
  chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    strokeWidth: 0.5,
    fillShadowGradient: '#fff',
    color: () => `rgba(89, 87, 87, 1)`,
  };

  // グラフの値を設定
  datasets = [ 102, 154, 135, 352, 221];

  constructor(props) {
    super (props);
  }

  render() {
    return(
      <View style={styles.container}>
        <LineChart
          data={{
            labels: this.labels,
            datasets: [{
              data: this.datasets,
              color: (opacity = 1) => `rgba(230, 22, 115, 1)`,
              strokeWidth: 2
            }],
          }}
          width={Dimensions.get("window").width - 50}
          height={181}
          yAxisSuffix={''}
          chartConfig={this.chartConfig}
          withInnerLines={false}
          style={styles.chart}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    marginLeft: -15,
    paddingLeft: 5
  }
});