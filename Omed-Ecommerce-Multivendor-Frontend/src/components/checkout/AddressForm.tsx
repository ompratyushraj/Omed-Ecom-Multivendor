import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as Yup from "Yup";
import { useAppDispatch } from '../../state/Store';
import { createOrder } from '../../state/user/orderSlice';


const AddressFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/,
        "Invalid mobile number"),
    pinCode: Yup.string().required("Pin code is required").matches(/^[1-9][0-9]{5}$/,
        "Invalid pin code"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required"),
})

const AddressForm = ({paymentGateway}:any) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: "",
            pinCode: "",
            address: "",
            city: "",
            state: "",
            locality: ""
        },
        validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            dispatch(createOrder({
                address:values,
                jwt:localStorage.getItem("jwt") || "",
                paymentGateway:paymentGateway,
            }))
            console.log(values);
        }
    });

    return (
        <Box sx={{ mx: "auto"}}>
            <p className='text-xl font-bold text-center pb-5'>Contact Details</p>

            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField
                            name="mobile"
                            label="mobile"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField
                            name="pinCode"
                            label="pinCode"
                            value={formik.values.pinCode}
                            onChange={formik.handleChange}
                            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                            helperText={formik.touched.pinCode && formik.errors.pinCode}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            name="address"
                            label="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            name="locality"
                            label="locality"
                            value={formik.values.locality}
                            onChange={formik.handleChange}
                            error={formik.touched.locality && Boolean(formik.errors.locality)}
                            helperText={formik.touched.locality && formik.errors.locality}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField
                            name="city"
                            label="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField
                            name="state"
                            label="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                            fullWidth
                        />
                    </Grid>

                    <Grid size={{ xs:12 }}>
                        <Button fullWidth type="submit" variant='contained' sx={{ py:"14px", borderRadius: "50px"}}>
                            Add Address
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default AddressForm;
