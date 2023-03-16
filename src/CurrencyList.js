import React from "react";
import axios from "axios";

const CurrencyList = () => {
  const getJSON = async() => {
    const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.REACT_APP_FREECURRENCY_API_KEY}`)
    const data = await response;
    console.log(data.data)
  };

  getJSON();
}

export { CurrencyList };