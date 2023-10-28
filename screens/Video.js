import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Video({navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Video source={{ uri: 'https://example.com/your_video.mp4' }}
                    title="Video title">

                </Video>
            </View>
           
        </View>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'

    }
})

export default Video;