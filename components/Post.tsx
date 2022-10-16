import { Text, View } from "./Themed";
import img from '../assets/images/img.jpg';
import { Image, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const Post = () => {
    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <View style={styles.leftSideHeader}>
                    <Image style={styles.imageHeader} source={img} />
                    <Text style={styles.titleHeader}>jaycutlerreal</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="black" style={styles.dotsIcon} />
            </View>
            <Image style={styles.image} source={img} />
            <View style={styles.contentIcons}>
                <EvilIcons style={styles.contentIcon} name="heart" size={39} color="black" />
                <EvilIcons style={styles.contentIcon} name="comment" size={37} color="black" />
                <Feather name="send" size={28} color="black" />
            </View>
            <View style={styles.contentText}>
                <Text style={styles.contentUserName}>jaycutlerreal</Text>
                <Text>Photo from my insane cut</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        
    },
    postHeader: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageHeader: {
      width: 40,
      height: 40,
      borderRadius: 50 
    },
    image: {
        alignContent: 'stretch',
        height: 500
    },
    titleHeader: {
        marginLeft: 10,
        fontSize: 15
    },
    leftSideHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dotsIcon: {
        marginLeft: 210
    },
    contentIcons: {
        flexDirection: 'row',
        padding: 7
    },
    contentIcon: {
        marginRight: 5
    },
    contentUserName: {
        fontWeight: 'bold',
        marginRight: 5
    },
    contentText: {
        marginLeft: 10,
        flexDirection: 'row',
        marginBottom: 10
    }
})

export default Post;