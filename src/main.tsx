import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/auth/auth.provider";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster";

// tanstack query
// Create a client
export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* don't system specific color theme */}
    <ChakraProvider enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster />
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
