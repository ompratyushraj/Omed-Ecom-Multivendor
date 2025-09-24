import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Grid, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
    return (
        <div className="flex justify-between">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar
                            className="text-white"
                            sx={{
                                width: 56,
                                height: 56,
                                bgcolor: "#9155FD",
                            }}
                        >
                            Review
                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className="space-y-1">
                        <div>
                            <p className="font-semibold text-lg">Narendra Damodar Das Modi</p>
                            <p className="opacity-70">2024-09-27T23:16:07.478333</p>
                        </div>
                    </div>
                    <Rating readOnly value={4} precision={1} />
                    <p className="reviwetext mb-2">value for money product, great product</p>

                    <div>
                        <img className="w-24 h-24 object-cover rounded-2xl" src="https://plus.unsplash.com/premium_vector-1726847733818-a5fba4f5cf70?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </Grid>
            </Grid>
            <div>
                <IconButton><Delete sx={{ color: red[700] }} /> </IconButton>
            </div>
        </div>
    );
};

export default ReviewCard;
