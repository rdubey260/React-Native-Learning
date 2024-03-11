import { View, Text, StyleSheet, Image } from 'react-native';

const ListDetailScreen = ({ route }: any) => {
  const { itemId } = route.params;
  console.log('>>>>itemId', itemId);

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10, alignItems: 'center' }}>
        <Image
          src={itemId.thumbnailUrl}
          style={{ height: 400, width: 400 }}
        />
        <Text>{itemId.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default ListDetailScreen;
