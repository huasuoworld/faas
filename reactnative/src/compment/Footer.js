import React from 'react'
import {Text, View, SafeAreaView, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import MainContent from "./MainContent";
import EmptyContent from "./EmptyContent";
import ContactContainer from "./todo/ContactContainer";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.data
    }
    date() {
        const date = new Date()
        return date
    }
    render() {
        console.log(this.state)
        return (
            <SafeAreaView style={{flex: 10}}>
                <TabNavigator >
                    <TabNavigator.Item
                        selected={this.state.title === '微信'}
                        title="微信"
                        renderIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/agility-icon.png')} />}
                        renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/agility-icon.png')} />}
                        // renderBadge={() => <MainContent />}
                        // badgeText="1"
                        onPress={() => this.setState({title : '微信'})}>
                        <MainContent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.title === '通讯录'}
                        title="通讯录"
                        renderIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/apiservice.png')} />}
                        renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/apiservice.png')} />}
                        // renderBadge={() => <EmptyContent />}
                        onPress={() => this.setState({title : '通讯录'})}>
                        <EmptyContent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.title === '发现'}
                        title="发现"
                        renderIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/th.jpeg')} />}
                        renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/th.jpeg')} />}
                        // renderBadge={() => <EmptyContent />}
                        onPress={() => this.setState({title : '发现'})}>
                        <EmptyContent />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.title === '我'}
                        title="我"
                        renderIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/Forklift-icon.png')} />}
                        renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/Forklift-icon.png')} />}
                        // renderBadge={() => <EmptyContent />}
                        onPress={() => this.setState({title : '我'})}>
                        <ContactContainer />
                    </TabNavigator.Item>
                </TabNavigator>
            </SafeAreaView>
        )
    }
}

export default Footer
