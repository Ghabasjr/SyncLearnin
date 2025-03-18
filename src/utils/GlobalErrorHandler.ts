import { QueryClient } from "@tanstack/react-query";
import { handleLogout } from "./Logout";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1, // Retry failed queries once
            refetchOnWindowFocus: false, // Avoid refetching when the window gains focus
        },
        mutations: {
            retry: 1, // Retry failed mutations once
        },
    },
});

// Add a global error handler for queries
queryClient.getQueryCache().subscribe((event) => {
    console.log("query event", event);
    if (event?.type === "updated" && event.query.state.status === "error") {
        const error = event.query.state.error;
        if (
            error &&
            typeof error === "object" &&
            "response" in error &&
            (error as any).response?.status === 401
        ) {
            handleLogout(); // Log out the user if token has expired
        }
    }
});

// Add a global error handler for mutations
queryClient.getMutationCache().subscribe((event) => {
    console.log("mutation event", event);
    if (event?.type === "updated" && event.mutation.state.status === "error") {
        const error = event.mutation.state.error;
        if (
            error &&
            typeof error === "object" &&
            "response" in error &&
            (error as any).response?.status === 401
        ) {
            handleLogout(); // Log out the user if token has expired
        }
    }
});
