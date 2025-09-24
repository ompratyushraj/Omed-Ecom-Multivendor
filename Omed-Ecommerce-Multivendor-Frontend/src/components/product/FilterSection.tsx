import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { teal } from "@mui/material/colors";
import { colors } from "../../data/filter/colors";
import { discount } from "../../data/filter/discount";
import { price } from "../../data/filter/price";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [expendBrand, setExpendBrand] = useState(false);
  const [expendDiscount, setExpendDiscount] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };

  const handleBrandToggle = () => {
    setExpendBrand(!expendBrand);
  };

  const handleDiscountToggle = () => {
    setExpendDiscount(!expendDiscount);
  };

  const updateFilterParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(new URLSearchParams(searchParams));
  };

  const clearAllFilters = () => {
    const keys = Array.from(searchParams.keys());
    keys.forEach((key) => {
      searchParams.delete(key);
    });
    setSearchParams(new URLSearchParams());
  };

  return (
    <div>
      <div className="-z-50 space-y-5 bg-white">
        <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
          <p className="text-lg font-semibold">Filters</p>
          <Button
            onClick={clearAllFilters}
            size="small"
            className="text-teal-600 cursor-pointer font-semibold"
          >
            clear all
          </Button>
        </div>
        <Divider />
        <div className="px-9 space-y-6">
          <section>
            <FormControl>
              <FormLabel id="color">Color</FormLabel>
              <RadioGroup
                aria-labelledby="color"
                defaultValue=""
                name="color"
                onChange={updateFilterParams}
              >
                {colors
                  .slice(0, expendColor ? colors.length : 5)
                  .map((item) => (
                    <FormControlLabel
                      key={item.name}
                      value={item.name}
                      control={<Radio />}
                      label={
                        <div className="flex items-center gap-3">
                          <p>{item.name}</p>
                          <p
                            style={{ backgroundColor: item.hex }}
                            className={`h-5 w-5 rounded-full ${
                              item.name === "White" ? "border" : ""
                            }`}
                          ></p>
                        </div>
                      }
                    />
                  ))}
              </RadioGroup>
            </FormControl>
            <div>
              <button
                onClick={handleColorToggle}
                className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
              >
                {expendColor ? "hide" : `+${colors.length - 5} more`}
              </button>
            </div>
          </section>

          <Divider />
          <section>
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  pb: "14px",
                  color: teal[600],
                }}
                className="text-2xl font-semibold"
                id="discount"
              >
                Discount
              </FormLabel>

              <RadioGroup
                name="discount"
                onChange={updateFilterParams}
                aria-labelledby="discount"
                defaultValue=""
              >
                {discount
                  .slice(0, expendDiscount ? discount.length : 5)
                  .map((item) => (
                    <FormControlLabel
                      key={item.name}
                      value={item.value}
                      control={<Radio size="small" />}
                      label={item.name}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
            {discount.length > 5 && (
              <div>
                <button
                  onClick={handleDiscountToggle}
                  className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
                >
                  {expendDiscount ? "hide" : `+${discount.length - 5} more`}
                </button>
              </div>
            )}
          </section>

          <Divider />
          <section>
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  pb: "14px",
                  color: teal[600],
                }}
                className="text-2xl font-semibold"
                id="price"
              >
                Price
              </FormLabel>

              <RadioGroup
                name="price"
                onChange={updateFilterParams}
                aria-labelledby="price"
                defaultValue=""
              >
                {price
                  .slice(0, expendBrand ? price.length : 5)
                  .map((item) => (
                    <FormControlLabel
                      key={item.name}
                      value={item.value}
                      control={<Radio size="small" />}
                      label={item.name}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
            {price.length > 5 && (
              <div>
                <button
                  onClick={handleBrandToggle}
                  className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
                >
                  {expendBrand ? "hide" : `+${price.length - 5} more`}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
