import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://14164.fullstack.clarusway.com/";

// Tokensiz api istekleri için bir instance olustur.
export const axiosPublic = axios.create({
    baseURL: BASE_URL,
});

const useAxios = () => {
    const { token } = useSelector(state => state.auth)

    //Token gerektiren istekler için
     const axiosWithToken=axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Token ${token}` },
    });
  return { axiosWithToken }
}

export default useAxios

