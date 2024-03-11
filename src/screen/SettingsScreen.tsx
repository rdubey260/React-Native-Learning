import { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const data = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

interface Iprops {
  navigation: any;
}

const SettingsScreen = (props: Iprops) => {
  const [showIndicator, setShowIndicator] = useState(true);
  const { navigation } = props;

  useEffect(() => {
    runTimer()
  }, []);

  const runTimer = () => {
    setTimeout(() => {
      console.log(">>>>>")
      setShowIndicator(false);
    }, 2000);
  };

  const navigateToAxios = () => {
    navigation.navigate('AxiosScreen');
  };

  return (
    <View style={styles.container}>
      {showIndicator && <ActivityIndicator testID="activity-indicator" accessibilityHint='loading' />}
      <ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <TouchableOpacity testID='navigate-axios' style={{ backgroundColor: 'blue' }} onPress={navigateToAxios}>
        <Text>Axios Call</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default SettingsScreen;
