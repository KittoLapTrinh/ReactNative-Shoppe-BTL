import React, { useContext } from 'react';
import { StyleSheet,
     Text, 
     View, 
     Image, 
     Button,
     Input, 
     TextInput,
     TouchableOpacity} from 'react-native';

export default function screen4() {
    // let {img, setImg} = useContext(Mycontext)
    
    // let navigation = useNavigation();
    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <Image style={{flex: 1, width: '80%', height:'80%' , }} source={require('../assets/ip_den.jpg')}></Image>                                             
            </View>
            <View style={styles.center}>
                <View style={styles.center1}>
                    <Text style={{fontSize: 17}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
                <View style={styles.center2}>
                    <View style={styles.center21}>
                        <Image style={{ width: 30, height:30 }} source={require('../assets/ngoisao.jpg')}></Image>         
                        <Image style={{ width: 30, height:30 }} source={require('../assets/ngoisao.jpg')}></Image>                                           
                        <Image style={{ width: 30, height:30 }} source={require('../assets/ngoisao.jpg')}></Image>                                           
                        <Image style={{ width: 30, height:30 }} source={require('../assets/ngoisao.jpg')}></Image>                                           
                        <Image style={{ width: 30, height:30 }} source={require('../assets/ngoisao.jpg')}></Image>                                           
                        
                       
                    </View>
                    <View style={styles.center22}>
                        <Text>(Xem 828 đánh giá)</Text>
                    </View>
                </View>
                <View style={styles.center3}>
                    <View style={styles.center31}>
                        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000000' }} >1.790.000 đ</Text>
                    </View>
                    <View style={styles.center32}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textDecorationStyle: 'solid' , color: '#8c8c8c',marginLeft: 60}}><del>1.790.000 đ</del></Text>
                    </View>
                   
                </View>
                <View style={styles.center4}>
                    <Text style={{color: 'red',fontSize: 12, fontWeight: 'bold',}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image style={{ width: 20, height:20, marginLeft: 20  }} source={require('../assets/icon_chamhoi.jpg')}></Image>                                           
                </View>
                <View style={styles.center5}>
                   
                    <input value='4 MÀU-CHỌN MÀU          >' type='button' style={{width:'350px', height:'35px', borderRadius: '10px', fontSize: '20px', fontWeight: 'bold'}}></input>
                    
                   
                </View>
            </View>
           
            <View style={styles.bottom}>
                
                
                <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#ee0a0a', borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 1, width: 320 }}
                onPress={()=> navigation.navigate('screen1')}
                >
                <Text style={{ fontWeight: 30, fontWeight: 'bold', color: 'white' }}>CHỌN MUA</Text>
                </TouchableOpacity>
               
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      
    },
    top:{
        flex:2.5,
        alignItems:'center', 
        justifyContent:'center'
    },

    center:{
        flex:1.5,
      
        
      
    },
    center1:{
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    center2:{
        flex:1,
       
        flexDirection: 'row',
        alignItems: 'center',
       
        justifyContent: 'center'
       
    },
    center21:{
        flex:1,
        flexDirection: 'row',
        marginLeft: 30
       
        
     
    },
    center22:{
        flex:1,
       marginLeft: 30,
       
      
    },
    center3:{
        flex:1,
        flexDirection: 'row',
        marginLeft: 35,
     
 
    },
   
    center4:{
        flex:1,
       
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingLeft: 40

    },
    center41:{
        flex:1,
       
       

    },
    center42:{
        flex:1,
       
        

    },
    center5:{
        flex:1,
        alignItems: 'center',  
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    bottom:{
        flex:0.6,
        alignItems: 'center', 
        marginTop: 50,
    
       
       
    },
    bottom1:{
  
        
    }
   
});
