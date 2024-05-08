import { useEffect, useState } from "react";
import { fechDataFromApi } from "../utils/api";
const useFetch = (endpoint) => {
    let [data, setData] = useState();
    useEffect(() => {
        fechData()
    }, [endpoint]);

    const fechData = async () => {
        let data = await fechDataFromApi(endpoint);
        setData(data);
    }
    return data;
}

export default useFetch;