import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import authService from "../../services/Auth/authService";
import { toast } from "react-toastify";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async (data: Record<string, any>) =>
            (await authService.login(data)),
    });
};


export const useVerifyEmailMutation = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await authService.verifyEmail(rest))?.data;
        },
    });
};


export const useResendOtp = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await authService.resendOtp(rest))?.data;
        },
    });
};

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await authService.signup(rest))?.data;
        },
    });
};

export const useResetPasswordMutation = () => {
    return useMutation({
        mutationFn: async (data: { _type?: string;[key: string]: any }) => {
            const { _type, ...rest } = data;
            return (await authService.forgotPassword(rest))?.data;
        },
    });
};



export const useForgotPasswordMutation = () => {
    return useMutation({
        mutationFn: async (data: Record<string, any>) =>
            (await authService.forgotPassword(data))?.data,
    });
};

export const useUpdateProfileMutation = () => {
    const { data }: any = useUserProfile();
    return useMutation({
        mutationFn: async (monoUserId: any) =>
            (await authService.updateProfile(data?.id, monoUserId))?.data,
    });
};


type UserProfileResponse = {
    id: string;
    name: string;
    email: string;
};


export const useUserProfile = () => {
    const [expired, setExpired] = useState(false);
    const [searchParams] = useSearchParams();

    const { data, error, isLoading, isError, refetch } = useQuery<
        UserProfileResponse,
        Error
    >({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await authService.getUserProfile();
            return response?.data; // Ensure your API returns data in this format
        },
        // onError: (err) => {
        //   toast.error(err?.message || "Unable to fetch profile");
        //   if (
        //     err?.message?.includes("401") ||
        //     err?.message?.includes("jwt expired")
        //   ) {
        //     setExpired(true);
        //     // You can handle navigation logic here if needed
        //   }
        // },
    });

    const updateExpired = (state: boolean) => {
        setExpired(state);
    };

    return { data, error, isLoading, isError, refetch, expired, updateExpired };
};
