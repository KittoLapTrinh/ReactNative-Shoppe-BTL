import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
// import Video from 'react-native-video';
import { useEffect, useState } from 'react'



function ScreenVideo({navigation}){

   
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://6540a7f045bedb25bfc245f4.mockapi.io/Video')
            .then((response) => response.json())
            .then((json) =>setData(json))
    })
    return(
        <View style={styles.container}>
          
            
           {data.map((item)=>(
                <View>
                    <View>
                        <View style={{}}>
                            <Image style={{width: 65, height: 65,}} source={{uri: item.avata}}></Image>
                        </View>
                        <View >
                          
                        </View>
                    </View>
                </View>
           ))}
           
           
        </View>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'

    }
})

export default ScreenVideo;