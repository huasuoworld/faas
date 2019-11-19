import React from "react"
import axios from "axios"

class HttpTools  {
    static APIS = {
        baseurl: "http://172.20.10.2:9091",
        save: "http://localhost:9091/contact",
        findAll: "http://localhost:8000/contact"
    }
    static post(url, data, callback) {
        data.page = 0;
        data.size = 20;
        const options = {
            method: "POST",
            url: url,
            data: data,
            headers: {
                baseurl: this.APIS.baseurl
            }
        }
        axios(options).then(response => {
            console.log(response)
            callback(response.data)
        })
    }
    static get(url, data, callback) {
        data.page = 0;
        data.size = 20;
        const options = {
            method: "GET",
            url: url,
            data: data,
            headers: {
                baseurl: this.APIS.baseurl
            }
        }
        axios(options).then(response => {
            console.log(response)
            callback(response.data)
        })
    }
}

export default HttpTools
