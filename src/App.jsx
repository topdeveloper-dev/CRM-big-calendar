import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./routes/MainRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-mulish h-screen overflow-y-hidden text-sm">
        <MainRoutes />
        <ToastContainer position="top-right" newestOnTop />
      </div>
    </QueryClientProvider>
  );
}

export default App;
