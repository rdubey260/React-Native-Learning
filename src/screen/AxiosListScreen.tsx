import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';


interface Iitem {
  id: string;
  title: string;
  thumbnailUrl: string;
}

export const RenderItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity testID="item-press" onPress={() => handlePress(item)}>
      <View style={{ marginVertical: 10, alignItems: 'center' }}>
        <Image src={item.thumbnail} style={{ height: 200, width: '90%' }} />
        <Text>{item.brand}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AxiosListScreen = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      console.log('>>>>>>>res', res.data)
      setData(res.data.products)
    }).catch((err) => {
      console.log('>>>>>>>err', err)
    })
  }, [])

  const handlePress = (item: Iitem) => {
    console.log('>>>>>');
  };

  return (
    <View testID="list-container" style={styles.container}>
      <FlatList
        testID="flat-list"
        data={data}
        renderItem={({ item }) => (
          <RenderItem item={item} handlePress={handlePress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default AxiosListScreen;
