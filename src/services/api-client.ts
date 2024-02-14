import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2ee08beb4dec4a89a38d9de142561121",
    },
});
