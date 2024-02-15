import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

// React Query Client
const queryClient = new QueryClient({
    // defaultOptions: {
    //     queries: {
    //         retry: 3,
    //         cacheTime: 300_000, // 5 min
    //         staleTime: 10 * 1000, // 10 s
    //         refetchOnWindowFocus: false,
    //         refetchOnReconnect: false,
    //         refetchOnMount: false,
    //     },
    // },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
            ></ColorModeScript>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);
