// import axios from "axios";
const axios = require("axios");
export default {
    callAPI: async function (searchValue, sortValue, limitValue) {
        const url = `https://jsonplaceholder.typicode.com/photos`;
        const res = await axios.get(url);
        return res.data;
    },
};
