import axios from "axios";
import { useEffect } from "react";


const Firms = () => {

  const BASE_URL = "https://14164.fullstack.clarusway.com/";
  const getFirms = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}stock/firms`);
    } catch (error) {
      
    }
  }
useEffect(() => {
  getFirms();
}, []);

  return <div>Firms</div>;
};

export default Firms;
