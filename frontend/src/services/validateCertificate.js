import axios from "axios"

export const validate = async (certificateNumber,endPoint) => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    console.log(baseURL);
    

    if (!baseURL) {
        throw new Error("API Base URL not configured. Please set REACT_APP_API_BASE_URL in your .env file.");
    }

    // 2. Construct the full API URL
    const fullUrl = `${baseURL}${endPoint}`;
    
    // Log for debugging purposes
    console.log(`Sending validation request to: ${fullUrl}`);
    try {
        const res = await axios.post(fullUrl, { certificateNumber });

        const data = await res.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error.response.data.message);
        throw Error(error.response.data.message)
    }
}