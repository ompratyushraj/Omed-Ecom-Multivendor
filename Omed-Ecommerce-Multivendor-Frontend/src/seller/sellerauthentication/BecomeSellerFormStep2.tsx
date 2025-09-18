import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as Yup from "Yup";

const BecomeSellerFormStep2 = ({formik}:any) => {

    return (
        <Box>
            <>
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

                </Grid>
            </>
        </Box>
    );
};

export default BecomeSellerFormStep2;
