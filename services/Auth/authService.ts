import {
    fetchAuthWrapper,
    cancelTokenSources,
    fetchBaseWrapper,
    fetchFormWrapper
} from "../../src/fetchWrapper/fetchwrapper";
// export const cancelTokenSources: CancelTokenSource[] = [];

export const authService = {
    login: async (credentials: any) => {
        try {
            const response = await fetchFormWrapper.post("/login", credentials);
            console.log("response", response);
            sessionStorage.setItem("token", response?.data?.access);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    staffRegister: async (credentials: any) => {
        try {
            const response = await fetchBaseWrapper.post("/register-invited-user/", credentials);
            // console.log("response", response);
            // sessionStorage.setItem("sctk", response?.data?.access);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    forgotPassword: async (payload: any) => {
        try {
            const response = await fetchAuthWrapper.post("/forgotpassword/", payload);
            return response;
        } catch (error) {
            // console.log(error, "error");
        }
    },

    getUserProfile: async () => {
        try {
            const response = await fetchAuthWrapper.get("/user/profile/current-user");
            return response;
        } catch (error) {
            // console.log(error, "error");
        }
    },

    updateUserProfile: async (userId: any, monoId: any) => {
        try {
            const response = await fetchAuthWrapper.put(`/update-profile/${userId}/`, monoId);
            return response;
        } catch (error) {
            // console.log(error, "error");
        }
    },

    resetPassword: async (request: any) => {
        try {
            const response = await fetchAuthWrapper.put("setnewpassword/", request);
            return response;
        } catch (error) {
            // console.log(error, "error");
        }
    },

    logout: async () => {
        try {
            cancelTokenSources.forEach((source) => source.cancel("Logout initiated"));
            cancelTokenSources.length = 0;

            localStorage.removeItem("isDefault");
            localStorage.removeItem("useSelection");
            sessionStorage.removeItem("sctk");
            return true;
        } catch (error) {
            // console.log(error, "error during logout");
            throw error;
        }
    },

    signup: async (payload: any) => {
        try {
            const response = await fetchFormWrapper.post("/auth/user/sign-up", payload);
            return response?.data;
        } catch (error) {
            // console.log(error, "error");
            throw error;
        }
    },
};

export default authService;
