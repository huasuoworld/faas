'use strict';

const axios = require('axios')

module.exports = {
  async contact(event, context) {
      let a = new Date();
      console.log(event.extensions.request.headers)
      console.log(event.data)

      let baseurl = event.extensions.request.headers.baseurl
      if(!baseurl) {
          return "baseurl is null!"
      }

      const options = {
        method: "GET",
        url: baseurl + "/contacts",
        data: {page: 0, size: 20}
      }

      let req = await axios(options)
      console.log(req.data)
      console.log("GET /hello/world 304 " + (a  - (new Date())) + " ms - -")
      return req.data
  },
}
