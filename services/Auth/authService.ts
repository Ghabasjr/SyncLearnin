import {
    fetchAuthWrapper,
    abortControllers,
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


    verifyEmail: async (credentials: any) => {
        try {
            const response = await fetchBaseWrapper.post("/verify-email", credentials);
            // console.log("response", response);
            // sessionStorage.setItem("sctk", response?.data?.access);
            return response.data;
        } catch (error) {
            throw error;
        }
    },


    resendOtp: async (payload: any) => {
        try {
            const response = await fetchAuthWrapper.post("/resend_otp/", payload);
            return response;
        } catch (error) {
            // console.log(error, "error");
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

    updateProfile: async (userId: any, monoId: any) => {
        try {
            const response = await fetchAuthWrapper.put(`/update-profile/`, monoId);
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
            abortControllers.forEach((controller) => controller.abort());
            abortControllers.length = 0;

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
            const response = await fetchFormWrapper.post("/signup", payload);
            return response?.data;
        } catch (error) {
            // console.log(error, "error");
            throw error;
        }
    },
};

export default authService;
