import React,{useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Send, Bubble, GiftedChat } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Messenger = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'That is great! I live in Kimball Hall.',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
          {
            _id: 2,
            text: 'Hi I am interested in buying your item!',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])
    
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
    
      const renderSend = (props) => {
          return(
            <Send {...props}>
                <View>
                    <Icon name='send-circle' size={32} color='#7AD278' style={{marginBottom: 6, marginRight: 6}}/>
                </View>
            </Send>
          )
      }

    const renderBubble = (props) => {
        return (
        <Bubble
            {... props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#7AD278' //changes bubble color
                } 
            }}
            textStyle={{
                right: {
                    color: "#fff"
                }
            }}
            />
        );
    }

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
      />
    );
};

const styles = StyleSheet.create({});

export default Messenger;