import React from "react";
import { useAppDispatch } from "../../state/Store";
import { useFormik } from "formik";
import { sendLoginSignupOtp } from "../../state/AuthSlice";
import { Button, TextField } from "@mui/material";

const CustomerRegisterForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullname: "",
    },
    onSubmit: (values) => {
      console.log("form data ", values);
      // values.otp=Number(values.otp)
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-primary-color">
        Signup
      </h1>
      <div className="space-y-5">
        <div className="space-y-2">
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
        </div>

        {true && (
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
            <TextField
              fullWidth
              name="fullname"
              label="Full Name"
              color="success"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullname && Boolean(formik.errors.fullname)}
              helperText={formik.touched.fullname && formik.errors.fullname}
            />
          </div>
        )}
      </div>

      {false && (
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
          Send Otp
        </Button>
      )}
      <Button
        onClick={() => formik.handleSubmit()}
        fullWidth
        variant="contained"
        sx={{
          py: "15px",
          mb: "20px",
          mt: "30px",
          borderRadius: "50px",
          backgroundColor: "green",
        }}
      >
        Register / Signup
      </Button>
    </div>
  );
};

export default CustomerRegisterForm;
