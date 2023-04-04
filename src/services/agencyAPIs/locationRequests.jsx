import { userRequest } from "../requestConfig";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLocationsQuery = () => {
  return useQuery(
    ["locations"],
    async () => {
      console.log("Render request");
      const res = await userRequest.get("/locations/");
      return res.data;
    },
    {
      onSuccess: () => {
        toast.success("Locations fetched successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    }
  );
};

export const useLocationMutation = () => {
  return useMutation(
    async (user) => {
      const res = await userRequest.post("/locations/", user);
      return res.data;
    },
    {
      onSuccess: (data) => {
        console.log("location Data:", data);
        toast.success("Location added Successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};
