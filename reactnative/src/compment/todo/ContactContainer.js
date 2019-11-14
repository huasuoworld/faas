import React from "react"
import ContactForm from "./ContactForm";
import HttpTools from "./HttpTools"
import {Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

class ContactContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            id: "",
            imageUrl: "",
            name: "",
            phone: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(key, text) {
        console.log(key, text)
        // const {name, value, type, checked} = event
        // if(type === "checkbox") {
        //     console.log(checked)
        //     this.setState({
        //         [name]: checked
        //     })
        // }
        // else
        this.setState({
            [key]: text
        })
    }
    handleSubmit(event) {
        console.log(event)
        HttpTools.post(HttpTools.APIS.save,this.state,(response) => {console.log(response)});
        event.preventDefault()
    }
    render() {
        return (
            <>
                <ContactForm handleChange={this.handleChange} data={this.state} handleSubmit={this.handleSubmit}/>
                <View style={{flex: 1}}>
                    <Text>
                        {this.state.id} -- {this.state.email} -- {this.state.imageUrl} -- {this.state.name} -- {this.state.phone}
                    </Text>
                </View>
            </>
        )
    }
}

export default ContactContainer
