// import { axiosWithToken } from '../service/axiosInstance';
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { useDispatch } from 'react-redux';
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

    const getStockData = async (url) => {
        dispatch(fetchStart());
        try {
          const { data } = await axiosWithToken.get(`stock/${url}/`);    
          dispatch(getSuccess({ data, url }));
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };
    const getFirms = () => getStockData("firms");
    const getSales = () => getStockData("sales");

  return { getFirms, getSales };
};

export default useStockCalls

 