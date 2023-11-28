import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';

function ShopeePay({navigation }){
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Home');
    }
    const goMall = () => {
        navigation.navigate('Mall');
    }
    const goLive = () => {
        navigation.navigate('Live');
    }
    const goVideo = () => {
        navigation.navigate('Video');
    }
    const goNotify = () => {
        navigation.navigate('Notify');
    }
    const goProfile = () => {
        navigation.navigate('Profile');
    }
    

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={goBack}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                    <View style={{marginHorizontal: 75, marginRight: 35}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>SHOPEEPAY</Text>
                    </View>
                    <View style={{ marginHorizontal: 20}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                            <Image style={{width: 40,height: 40}} source={require('../assets/giohang.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}} style={{}}>
                        <Image style={{width: 35, height: 35}} source={require('../assets/3cham.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                <View>
                    <Image style={{width: 390, height: 300}} source={require('../assets/pay1.png')}></Image>
                </View>           

                <View style={{flex: 0.05, backgroundColor: '#C4C4C4', marginTop: 10}}></View>
                
            </ScrollView>
            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'

    }
})

export default ShopeePay;