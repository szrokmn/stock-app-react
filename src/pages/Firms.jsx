import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux"


const Firms = () => {

  const { token } = useSelector((state) => state.auth);
  const BASE_URL = "https://14164.fullstack.clarusway.com/";
  const getFirms = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}stock/firms`, {
      headers: { Authorization:`Token ${token}` },
      });
    } catch (error) {
      console.log(error)
    }
  }
  
useEffect(() => {
  getFirms();
}, []);

  return <div>Firms</div>;
};

export default Firms;
