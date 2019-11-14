import React from "react"

import {Image, TextInput, Text, Button, View, StyleSheet} from 'react-native'
import {Colors} from "react-native/Libraries/NewAppScreen";

class ContactForm extends React.Component{
    render() {
        return (
            <View style={{flex: 3}}>
                    <Text>ID：</Text>
                    <TextInput value={this.props.data.id} placeholder="id" onChangeText={ text => this.props.handleChange('id', text)}/>

                    <Text>email：</Text>
                    <TextInput value={this.props.data.email} placeholder="email" onChangeText={text => this.props.handleChange('email', text)}/>

                    <Text>imageUrl：</Text>
                    <TextInput value={this.props.data.imageUrl} placeholder="imageUrl" onChangeText={text => this.props.handleChange('imageUrl', text)}/>

                    <Text>name：</Text>
                    <TextInput value={this.props.data.name} placeholder="name" onChangeText={text => this.props.handleChange('name', text)}/>

                    <Text>phone：</Text>
                    <TextInput value={this.props.data.phone} placeholder="phone" onChangeText={text => this.props.handleChange('phone', text)}/>

                    <Button onPress={this.props.handleSubmit} title="提交表单" />
            </View>
        )
    }
}


export default ContactForm
