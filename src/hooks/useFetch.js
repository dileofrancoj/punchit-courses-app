import { useEffect, useState } from "react";
import { API } from "./../API";
export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  const get = async (endpoint) => {
    try {
      const { data } = await API.get(`${endpoint}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userAuth")}`,
        },
      });
      console.log("la data", data);
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    get(endpoint);
  }, [endpoint]);

  return [data];
};
