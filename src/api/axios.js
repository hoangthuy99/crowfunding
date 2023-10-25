const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:4001",

});
// export const axiosPrivate = axios.create({
//   baseURL: "http://localhost:3009",
//   headers: {
//     "Content-Type": "application/json",
//     "Cache-Control": "no-cache",
//   },
// });
