// import { axiosWithToken } from '../service/axiosInstance';
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { useDispatch } from 'react-redux';
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //-------- GET CALLS --------
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

    //-------- DELETE CALLS ---------
      const deleteStockData = async(url, id) => {
        try {
          await axiosWithToken(`stock/${url}{${id}/`)
          toastSuccessNotify(`${url} successfuly deleted` )
          getStockData(url);
        } catch (error) {
          console.log(error)
          toastErrorNotify(`${url} can not be deleted`)
        }
      }

      const deleteFirm = (id) => deleteStockData("firms", id)

  return { getFirms, getSales, deleteFirm };
};

export default useStockCalls;

 