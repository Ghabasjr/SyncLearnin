import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "https://clevahack-server.onrender.com/api/";

// Store all active controllers for request cancellation
export const abortControllers: AbortController[] = [];

// Function to create an Axios instance
const createAxiosInstance = (
    baseUrl: string,
    tokenKey: string = "token",
    includeAuthHeader: boolean = true,
    headers: Record<string, string> = { "Content-Type": "application/json" }
): AxiosInstance => {
    const instance = axios.create({
        baseURL: baseUrl,
        headers: headers,
    });

    // Request interceptor
    instance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            if (includeAuthHeader) {
                const token = sessionStorage.getItem(tokenKey) || "";
                if (token) {
                    config.headers = {
                        ...config.headers,
                        Authorization: `Bearer ${token}`,
                    };
                }
            }

            // Create a new AbortController for each request
            const controller = new AbortController();
            config.signal = controller.signal;
            abortControllers.push(controller);

            return config;
        },
        (error: AxiosError) => Promise.reject(error)
    );

    // Response interceptor
    instance.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            if (
                error.response?.status === 401 ||
                error.response?.data?.message === "Unauthenticated"
            ) {
                console.warn("Authentication error:", error.response.data);

                // Cancel all ongoing requests
                abortControllers.forEach((controller) => controller.abort());
                abortControllers.length = 0;

                // Redirect to login page
                const url = new URL(window.location.href);
                let from = url.pathname;
                const searchParams = url.searchParams.toString();
                if (searchParams) {
                    from += `?${searchParams}`;
                }
                window.location.href = `/login?expired=true&from=${encodeURIComponent(from)}`;
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

// Wrapper function to create CRUD operations
const createFetchWrapper = (instance: AxiosInstance) => ({
    get: (url: string, config?: AxiosRequestConfig) => instance.get(url, config),
    post: (url: string, data?: any, config?: AxiosRequestConfig) => instance.post(url, data, config),
    patch: (url: string, data?: any, config?: AxiosRequestConfig) => instance.patch(url, data, config),
    put: (url: string, data?: any, config?: AxiosRequestConfig) => instance.put(url, data, config),
    delete: (url: string, config?: AxiosRequestConfig) => instance.delete(url, config),
});

// Creating Axios instances
const authAxiosInstance = createAxiosInstance(`${BASE_URL}v1`);
const baseAxiosInstance = createAxiosInstance(`${BASE_URL}v1`, "token", false);
const formAxiosInstance = createAxiosInstance(`${BASE_URL}v1`, "token", true, {
    "Content-Type": "multipart/form-data",
});

// Creating Fetch Wrappers
const fetchAuthWrapper = createFetchWrapper(authAxiosInstance);
const fetchUserProfileWrapper = createFetchWrapper(authAxiosInstance);
const fetchBaseWrapper = createFetchWrapper(baseAxiosInstance);
const fetchFormWrapper = createFetchWrapper(formAxiosInstance);

export {
    fetchAuthWrapper,
    fetchUserProfileWrapper,
    fetchBaseWrapper,
    fetchFormWrapper,
};
