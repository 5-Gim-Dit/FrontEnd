import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 10000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
    (config) => {
        const accessToken =
            "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMDU5MTE0Mzk4IiwiaWF0IjoxNjk3MDc2ODkxLCJleHAiOjE3MDMxMjQ4OTF9.8ILEPNIOfRhC8-iO4Z6tFKWwyKGR6XWJS52B0AjCqY3NDjlNk-u4atkIbeic_Cmy0rkvFST-DRu2zNm9JoMq_g";
        const returnConfig = { ...config };
        if (accessToken) {
            returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`;
        }
        return returnConfig;
    },
    (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<AxiosError>) => {
        if (axios.isAxiosError(error) && error.response) {
            if (
                error.response.data.message === "Invalid Token" ||
                error.response.data.message === "Token Expired"
            ) {
                cookies.remove("access_token");
                cookies.remove("refresh_token");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);
