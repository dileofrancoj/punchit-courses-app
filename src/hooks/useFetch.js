import { useEffect, useState } from "react";
import { API } from "./../API";
export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  const get = async (endpoint) => {
    try {
      const { data } = await API.get(`${endpoint}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userAuth")}`,
        },
      });
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    get(endpoint);
  }, [endpoint]);

  return [data, fetching];
};
