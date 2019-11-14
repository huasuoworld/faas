/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Header from "./src/compment/Header";
import Footer from "./src/compment/Footer";
import {View} from 'react-native'

class App extends React.Component {
    constructor() {
        super()
        this.state = {title: "微信", title2: "这是标题2"};
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#F8F8FF"}} >
                <Header data={this.state}/>
                <Footer data={this.state}/>
            </View>
        );
    }
}

export default App;
