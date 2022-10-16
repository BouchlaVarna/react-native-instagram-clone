import { ScrollView, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Story from '../components/Story';
import Post from '../components/Post';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Instagram</Text>
        <View style={styles.rightSide}>
          <Octicons style={styles.headerIcon} name="diff-added" size={26} color="black" />
          <EvilIcons style={styles.headerIcon} name="heart" size={34} color="black" />
          <Feather name="send" size={25} color="black" />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stories}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ScrollView>

      <ScrollView>
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    marginTop: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white'
  },
  rightSide: {
    flexDirection: 'row'
  },
  headerIcon: {
    marginRight: 12
  },
  stories: {
    minHeight: 90,
    paddingLeft: 10,
    marginBottom: 10
  }
});
