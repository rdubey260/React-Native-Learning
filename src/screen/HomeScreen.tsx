import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

const data = [
  {
    id: '1',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
  },
  {
    id: '2',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
  },
  {
    id: '3',
    title: 'For Bigger Blazes',
    thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
  },
  {
    id: '4',
    title: 'For Bigger Escape',
    thumbnailUrl:
      'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
  },
  {
    id: '5',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
  },
  {
    id: '6',
    title: 'For Bigger Blazes',
    thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
  },
  {
    id: '7',
    title: 'For Bigger Escape',
    thumbnailUrl:
      'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
  },
  {
    id: '8',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
  },
];

interface Iitem {
  id: string;
  title: string;
  thumbnailUrl: string;
}

export const RenderItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity testID="item-press" onPress={() => handlePress(item)}>
      <View style={{ marginVertical: 10, alignItems: 'center' }}>
        <Image src={item.thumbnailUrl} style={{ height: 200, width: '90%' }} />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }: any) => {
  const loginData = useSelector(state => state.loginReducer);
  let payload = loginData[0].payload;

  const handlePress = (item: Iitem) => {
    console.log('>>>>>');
    navigation.navigate('ListDetail', {
      itemId: item,
    });
  };

  return (
    <View testID="list-container" style={styles.container}>
      <View>
        <Text style={{ fontSize: 30 }}>{payload.userName}</Text>
      </View>
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

export default HomeScreen;
