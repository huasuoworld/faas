import React, {Component} from 'react'
import {Text, View, SafeAreaView} from 'react-native'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = props.data
    }
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text key="header1">{`${this.state.title}`}</Text>
            </SafeAreaView>
        )
    }


}

export default Header
