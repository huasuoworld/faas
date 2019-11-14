'use strict';

const axios = require('axios');

module.exports = {
  async capitalize(event, context) {
      let a = new Date();
      const options = {
        method: "GET",
        url: "http://172.20.10.4:9091/contacts",
        data: {page: 0, size: 20}
      }

      let req = await axios(options);
      console.log(req.data);
      console.log("GET /hello/world 304 " + (a  - (new Date())) + " ms - -");
      return req.data;
  },
};
