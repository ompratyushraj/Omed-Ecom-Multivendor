import { Button, TextField } from "@mui/material";
import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { sendLoginSignupOtp, signin } from "../../../state/AuthSlice";
import { useAppDispatch } from "../../../state/Store";
import { sellerLogin } from "../../../state/seller/sellerAuthSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      dispatch(sellerLogin({email:values.email, otp: Number(values.otp)}))
      // dispatch(sellerLogin(values));
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({email:formik.values.email}))
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-primary-color pb-5">
        Login As Seller
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
        
        {true && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-60 justify-center items-center flex">
              Enter OTP sent to your email
            </p>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
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

      <Button
        onClick={handleSendOtp}
        fullWidth
        variant="contained"
        sx={{ py: "15px", my: "25px", borderRadius: "50px", backgroundColor:"green" }}
      >
        Send Otp
      </Button>
      <Button 
        onClick={()=>formik.handleSubmit()} fullWidth 
        variant="contained" 
        sx={{ py: "15px", mb:"30px", borderRadius: "50px", backgroundColor:"green" }}>
        Login
      </Button>
    </div>
  );
};

export default SellerLoginForm;
