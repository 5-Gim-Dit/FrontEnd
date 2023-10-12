import axios from "axios";

/** 스페이스 목록 조회 */
export const useOauth = () => {
    return axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/kakao`
    );
};
