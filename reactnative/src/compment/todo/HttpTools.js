import React from "react"
import axios from "axios"

class HttpTools  {
    static APIS = {
        save: "http://localhost:9091/contact",
        findAll: "http://localhost:8080/api/v1/namespaces/default/services/capitalize:http-function-port/proxy/"
    }
    static post(url, data, callback) {
        axios.post(url, data).then(response => callback(response))
    }
}

export default HttpTools
