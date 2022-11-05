import { View, Text, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { DATA } from '../../shared/DATA';


/* const HomeScreen = () => {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <Text style={{ color: 'green' }}>Home Screen</Text>
        </SafeAreaView>
      </View>
    )
  };

export default HomeScreen; */

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const HomeScreen = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default HomeScreen;