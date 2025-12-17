import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/Store";
import { useFormik } from "formik";
import { sendLoginSignupOtp } from "../../state/AuthSlice";
import { Button, CircularProgress, TextField } from "@mui/material";
import { signin } from "../../state/AuthSlice";
import { useNavigate } from "react-router-dom";

const CustomerLoginForm = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((store) => store);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data ", values);
      // values.otp=Number(values.otp)
      dispatch(signin(values));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  // Redirect after successful login and OTP verification
  useEffect(() => {
    if (auth.isLoggedIn && auth.user) {
      navigate("/"); // or another post-login destination
    }
  }, [auth.isLoggedIn, auth.user]);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-primary-color">
        Login
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          color="success"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {auth.otpSent && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-60 justify-center items-center flex">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="OTP"
              color="success"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}
      </div>

      {auth.otpSent ? (
        <Button
          onClick={() => formik.handleSubmit()}
          fullWidth
          variant="contained"
          disabled={auth.loading}
          sx={{
            py: "15px",
            mb: "30px",
            borderRadius: "50px",
            backgroundColor: "green",
          }}
        >
          {auth.loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      ) : (
        <Button
          onClick={handleSendOtp}
          fullWidth
          variant="contained"
          sx={{
            py: "15px",
            my: "25px",
            borderRadius: "50px",
            backgroundColor: "green",
          }}
        >
          {auth.loading ? <CircularProgress /> : "Send OTP"}
        </Button>
      )}
    </div>
  );
};

export default CustomerLoginForm;
