import React from 'react'
import {Text, View} from "react-native";

class EmptyContent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View>
                <Text >{"hello world"}</Text>
            </View>
        )
    }
}

export default EmptyContent
