import axios from "axios";

const fetchData = (url, method = 'GET') => {
  try {
    axios.request({
      method: method,
      url: url
    });
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;