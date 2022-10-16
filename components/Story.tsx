import { Text, View } from "./Themed";
import img from '../assets/images/img.jpg';
import { Image, StyleSheet } from "react-native";

const Story = () => {
    return (
        <View>
            <Image style={styles.image} source={img} />
            <Text>Jay Cutler</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'orange',
        marginRight: 10
    }
})
 
export default Story;