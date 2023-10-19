import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-web';

function Profile({navigation }){
    return(
        <View style={styles.container}>
            <ScrollView bounces={false}>    
                <View style={{ backgroundColor: '#f0743f', flex: 1, flexDirection: 'column'}}>                  
                    <View style={{justifyContent: 'flex-end'}}>
                        <Image style={{width: 50, height: 50}} source={require('../assets/user1.png')}></Image>
                    </View>
                   
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',}}>
                            <Image style={{width: 25, height: 25}} source={require('../assets/setting.png')}></Image>
                            <Image style={{width: 25, height: 25}} source={require('../assets/giohang.png')}></Image>
                            <Image style={{width: 25, height: 25}} source={require('../assets/messenger.png')}></Image>
                            
                            
                        
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
                        
                            
                            
                            <Button title='Đăng nhập' color={'#fbd7c7'} style={{}}></Button>
                            <Button title='Đăng ký' color={'#fbd7c7'}></Button>
                        </View>
                    </View>
                    
                    
                    
                    
                    
                </View>
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

export default Profile;
