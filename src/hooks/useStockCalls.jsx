import React from 'react'
import { axiosWithToken } from '../service/axiosInstance';

const useStockCalls = () => {

    const getFirms = async () => {
        const url = "firms";
        dispatch(fetchStart());
        try {
          const { data } = await axiosWithToken.get(`stock/firms`);    
          console.log(data);
          dispatch(getSuccess({ data, url }));
        } catch (error) {
          dispatch(fetchFail());
          console.log(error);
        }
      };

  return (
    <div>useStockCalls</div>
  )
}

export default useStockCalls

