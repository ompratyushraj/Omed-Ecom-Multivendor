import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../../components/account/AddressCard";
import AddressForm from "../../components/checkout/AddressForm";
import { RoundedCorner, RoundedCornerRounded } from "@mui/icons-material";
import PricingCard from "../../components/cart/PricingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatwayList = [
  {
    value: "RAZORPAY",
    image:
      "https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2024/05/Razorpay-Logo.jpg",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/K3ReOAHQ6AnjETRznub9X/b33c5613eb9ad0ff3c2908c524f14aa0/social.png?q=80",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");

  const handlePaymentChange = (event: any) => {
    setPaymentGateway(event.target.value);
  };
  return (
    <>
      <div>
        <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
          <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
            <div className="col-span-2 space-y-5">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">Select Address</h1>
                <Button onClick={handleOpen}>Add new Address</Button>
              </div>
              <div className="text-xs font-medium space-y-5">
                <p>Saved Addresses</p>
                <div className="space-y-3">
                  {[1, 1, 1].map((item) => (
                    <AddressCard />
                  ))}
                </div>
              </div>
              <div className="py-4 px-5 rounded-md border">
                <Button onClick={handleOpen}>Add new Address</Button>
              </div>
            </div>

            <div className="space-y-3 border p-5 rounded-md">
              <div>
                <h1
                  className="text-primary-color font-medium pb-1
text-center"
                >
                  Chose Payment Gatway
                </h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-labe
1"
                  name="row-radio-buttons-group"
                  className="w-full max-w-md ms-3 my-3 flex justify-between"
                  onChange={handlePaymentChange}
                  value={paymentGateway}
                >
                  {paymentGatwayList.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      className="w-[45%] rounded-2xl overflow-hidden border flex justify-center items-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`w-full h-full object-cover rounded-2xl ${
                            item.value === "stripe" ? "max-w-[56px]" : ""
                          }`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
              <PricingCard />
              <div className="px-4">
                <Button fullWidth variant="contained" sx={{ py: "11px", borderRadius: "50px", backgroundColor: "green", fontSize: "1.1rem"  }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm paymentGateway={paymentGateway}/>
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
