const axios = require("axios").default;
module.exports = axios.create({
  // baseURL: "http://horoscope-api.herokuapp.com/horoscope/today/"
    baseURL: "http://localhost:8082/"
    // baseURL: "http://localhost:9044/"

});