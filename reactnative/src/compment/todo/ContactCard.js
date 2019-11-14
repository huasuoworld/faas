import React from 'react'
import {Text, View, Image, Button, ScrollView, ActivityIndicator, Alert} from 'react-native'
import { ListItem } from "react-native-elements"
import {} from 'react-native-vector-icons'
//
// {/*<ListItem*/}
// {/*    key={this.props.contact.id}*/}
// {/*    leftAvatar={{ source: { uri: this.props.contact.imageUrl } }}*/}
// {/*    title={this.props.contact.name}*/}
// {/*    subtitle={this.props.contact.email}*/}
// {/*    bottomDivider*/}
// {/*/>*/}
class ContactCard extends React.Component {
    constructor() {
        super()
        // console.log("I was clicked!")
        this.state = {
            count: 0
        }
        this.clickMe = this.clickMe.bind(this);
    }
    clickMe() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => {
                        console.log('OK Pressed')
                        this.setState(prevState => {
                            return {
                                count: prevState.count + 1
                            }
                        })
                    }
                },
            ],
            {cancelable: false},
        );

    }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        if(this.state.isLoading)
            return (
                <>
                    <ActivityIndicator size="large" color="#0000ff" />
                </>
            )
        else
            return (
                <ListItem
                    roundAvatar
                    title={this.props.contact.name}
                    subtitle={<Text style={{color: 'gray'}}>{this.props.contact.email}</Text>}
                    leftAvatar={{ source: { uri: this.props.contact.imageUrl } }}
                    bottomDivider
                />
                // {/*<>*/}
                // {/*    <Image style={{width: 50, height: 50}} source={{uri: this.props.contact.imageUrl ? this.props.contact.imageUrl : ""}}></Image>*/}
                // {/*    <Text style={this.props.contact.completed ? completedStyle : null}>{this.props.contact.name ? this.props.contact.name : "no name"}</Text>*/}
                // {/*    <Text>电话: {this.props.contact.phone}</Text>*/}
                // {/*    <Text>Email: {this.props.contact.email}</Text>*/}
                // {/*    /!*<input type="checkbox" onChange={() => this.props.changeContact(this.props.contact.id)}/>*!/*/}
                // {/*    <Text>{this.state.count}</Text>*/}
                // {/*    <Button onPress={this.clickMe} title="click me"></Button>*/}
                // {/*</>*/}
            )
    }
}

export default ContactCard
