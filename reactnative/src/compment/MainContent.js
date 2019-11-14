import React from 'react'

import TodoItem from "./todo/TodoItem";
import ContactCard from "./todo/ContactCard";
import ContactContainer from "./todo/ContactContainer"
import {View, ScrollView, ActivityIndicator, SafeAreaView, FlatList} from 'react-native'
import HttpTools from './todo/HttpTools'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            contact: {},
            isLoading: true
        }
        this.changeContact = this.changeContact.bind(this)
    }
    changeContact(id) {
        console.log("id>>", id)
        this.setState(prevState => {
            const updatedState = prevState.contact.map(contact => {
                contact.name = contact.name + id;
                return contact;
            })
            return updatedState;
        })
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetch(HttpTools.APIS.findAll)
            .then(response => response.json())
            .then(data => {
                console.log(data._embedded.contacts)
                this.setState({
                    contacts: data._embedded.contacts,
                    isLoading: false
                })
            })
    }
    render() {
        if(this.state.isLoading || !this.state || !this.state.contacts) {
            return (
                <>
                    <ActivityIndicator size="large" color="#0000ff" />
                </>
            )
        } else {
            console.log(this.state.contacts)
            // const contacts = this.state.contacts.content.map(contact => {
            //     return (
            //             <ContactCard key={contact.id} contact={contact} changeContact={this.changeContact}/>
            //     )
            // });
            return (
                <>
                    <FlatList data={this.state.contacts} renderItem={({item}) =>
                    {
                        console.log(item)
                        return (
                        <ContactCard key={item.id} contact={item} changeContact={this.changeContact}/>
                    )}
                    }>
                        {/*{contacts}*/}
                    </FlatList>
                </>
                // <>
                //     {/*<ContactContainer />*/}
                //     <ScrollView>
                //     {contacts}
                //     </ScrollView>
                // </>
            )
        }
    }
    // componentWillUnmount() {}
    // shouldComponentUpdate(nextProps, nextState, nextContext) {}
    // getSnapshotBeforeUpdate(prevProps, prevState) {}
}

export default MainContent
