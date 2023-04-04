import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../services/commonAPIs/authRequests";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const { mutate, isLoading } = useLoginMutation();

  const handleLogin = () => {
    if (emailError || passwordError) {
      toast.error("Please fill all the fields");
      return;
    }

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          if (data?.type === "AGENCY") {
            navigate("/agency");
          } else if (data?.type === "LOCATION") {
            navigate("/location");
          } else {
            toast.error("Invalid user type");
          }
        },
        onError: (error) => {
          navigate("/location"); // TODO: Remove this
        },
      }
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-t from-[#c2dbf8] to-light-indigo w-full flex justify-center items-center">
        {/* Container  */}
        <div className=" rounded-2xl shadow-xl flex  border border-gray-200">
          {/* Login Form  */}
          <div className="bg-white flex-[1.3] rounded-2xl flex flex-col  justify-between md:rounded-r-none ">
            <div className="flex flex-col py-4">
              <div className="flex flex-row">
                <div className="my-6 px-8">
                  <img
                    src="/paradigm.jpg"
                    alt="paradigm-logo"
                    className="w-12 h-12"
                  />
                </div>
                <h2 className="my-6 white text-2xl text-center font-bold">
                  Login to access the CRM
                </h2>
              </div>
              <div className="form px-2 flex flex-col gap-3 px-8">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  error={emailError}
                  helperText={emailError ? "Email is required" : ""}
                  fullWidth
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(e.target.value === "");
                  }}
                  onBlur={(e) => {
                    setEmail(e.target.value);
                    setEmailError(e.target.value === "");
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  error={passwordError}
                  helperText={passwordError ? "Password is required" : ""}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(e.target.value === "");
                  }}
                  onBlur={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(e.target.value === "");
                  }}
                  fullWidth
                />
                <div className="ml-auto">
                  <Link
                    to="/forgot"
                    className="text-end text-primary-600 font-semibold text-sm"
                  >
                    Forgot Your Password?
                  </Link>
                </div>
                <div className="inline-block mb-2">
                  <Button
                    variant="contained"
                    className="font-black px-3 py-2"
                    onClick={handleLogin}
                    sx={{
                      width: "160px",
                      height: "40px",
                      fontSize: "16px",
                      padding: "8px 16px",
                      fontWeight: "semibold",
                      "& .MuiCircularProgress-root": {
                        color: "#fff",
                      },
                    }}
                  >
                    {isLoading ? <CircularProgress size={25} /> : "Login"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-[1] bg-gradient-to-t from-[#248de9] to-[#9ab3ff]  rounded-r-2xl  items-center justify-center flex-col text-white hidden sm:flex ">
            <h2 className="mb-3 white text-2xl text-center font-black px-3">
              Welcome to Paradigm Development Group
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
