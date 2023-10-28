import {View,Button,ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Chat({navigation }){
    const [messages, setMessages] = useState([])
    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])
    return(
        <View style={styles.container}>
            <View>
              <Text>hi</Text>
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

export default Chat;