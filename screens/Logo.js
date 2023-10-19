import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

function Logo({navigation}){
    return(
        <View style={styles.container}>

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Profile')
                }}>
                    <Image style={{width: 170, height: 170}} source={require('../assets/logo.png')}/>
                </TouchableOpacity>
                
                <Text style={{color: '#f0743f', fontSize: 50, fontWeight: 'bold'}}>Shoppe</Text>
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

export default Logo;
