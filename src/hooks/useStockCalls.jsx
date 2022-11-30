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
          await axiosWithToken.delete(`stock/${url}{${id}/`)
          toastSuccessNotify(`${url} successfuly deleted` )
          getStockData(url);
        } catch (error) {
          console.log(error)
          toastErrorNotify(`${url} can not be deleted`)
        }
      }

      const deleteFirm = (id) => deleteStockData("firms", id)

      //-------- POST CALLS ---------
      const postStockData = async(info, url) => {
        try {
          await axiosWithToken.post(`stock/${url}/`, info)
          toastSuccessNotify(`${url} successfuly added` )
          getStockData(url);
        } catch (error) {
          console.log(error)
          toastErrorNotify(`${url} can not be added`)
        }
      }

      const postFirm = (info) => postStockData(info, "firms")

      //-------- PUT CALLS ---------
      const putStockData = async(info, url) => {
        try {
          await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
          toastSuccessNotify(`${url} successfuly updated` )
          getStockData(url);
        } catch (error) {
          console.log(error)
          toastErrorNotify(`${url} can not be updated`)
        }
      }

      const putFirm = (info) => putStockData(info, "firms")

  return { getStockData, getFirms, getSales, deleteFirm, postFirm, postStockData, putFirm, };
};

export default useStockCalls;

 