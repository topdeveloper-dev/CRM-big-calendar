import { publicRequest } from "../requestConfig";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation(
    async (user) => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // TODO: Remove this
      const res = await publicRequest.post("/auth/login", user);
      return res.data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("userInfo", JSON.stringify({ users: data }));
        toast.success("Login Successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

/*
On error
{
  "error": {
    "message": "Error message",
    "code": 400,
    "details": {
      "field1": "Error message for field1",
      "field2": "Error message for field2"
    }
  }
}
*/

/*
On success
{
  "data": {
    "accessToken": "abc123xyz",
    "user": {
      "id": 123,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
}
*/
