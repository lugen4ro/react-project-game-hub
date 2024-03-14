import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axisoInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2ee08beb4dec4a89a38d9de142561121", // Not good putting the api key here, but since we have not backend, we must compromise
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    // Get array of items
    getAll = (config?: AxiosRequestConfig) => {
        return axisoInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    };

    // Get single item
    get = (id: number | string, config?: AxiosRequestConfig) => {
        return axisoInstance
            .get<T>(this.endpoint + "/" + id, config)
            .then((res) => res.data);
    };
}

export default APIClient;
