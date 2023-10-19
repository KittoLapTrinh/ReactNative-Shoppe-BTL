import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';

function Notify({navigation }){
    return(
        <View style={styles.container}>
            <ScrollView>

            </ScrollView>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 35, paddingTop: 35, backgroundColor: '#C4C4C4'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/home.png')}></Image>
                    <Text>Home</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/mall.png')}></Image>
                    <Text>Mall</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/live.png')}></Image>
                    <Text>Live</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/video.png')}></Image>
                    <Text>Video</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../assets/thongbao.png')}></Image>
                    <Text>Thông báo</Text>
                </View>
                <TouchableOpacity>
                    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#5c5c5c'}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/toi.png')}></Image>
                        <Text>Tôi</Text>
                    </View>
                </TouchableOpacity>
                
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

export default Notify;