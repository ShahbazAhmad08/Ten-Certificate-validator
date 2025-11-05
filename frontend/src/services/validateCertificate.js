import axios from "axios"

export const validate = async (certificateNumber) => {
    try {
        const res = await axios.post("http://localhost:5001/api/v1/user/getdetails", { certificateNumber });

        const data = await res.data;
        console.log(data);
    } catch (error) {
        console.log("Error: ", error.response.data.message);
        throw Error(error.response.data.message)
    }
}