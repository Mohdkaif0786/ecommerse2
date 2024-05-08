import axios from 'axios';
const params = {
    headers: {
        Authorization: "bearer " + import.meta.env.REACT_APP_STRIPE_APP_KEY,
    },
}

export const fechDataFromApi = async (url) => {
    try {
        const {data}=await axios.get(import.meta.env.REACT_APP_DEV_URL + url,params);
        return data;
    } catch (error) {
        console.log(error);
        return error;                   
    }
}