import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Pagination, useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FilterAlt } from "@mui/icons-material";

import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setsort] = useState("");
  const [page, setPage] = useState(1);

  const handlePageChange = (value: number) => {
    setPage(value);
  }

  const handleSortChange = (event: any) => {
    setsort(event.target.value);
  };

  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
          Pharmaceuticals
        </h1>
      </div>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>
            <FormControl
              variant="standard"
              size="small"
              sx={{ width: "200px" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Sort
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sort}
                onChange={handleSortChange}
                label="sort"
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                <MenuItem value={"price_medium"}>Price: Medium</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />

          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {[1, 1, 1, 1, 1, 1, 1].map((item) => (
              <ProductCard />
            ))}
          </section>
          <div className="flex justify-center py-10">
            <Pagination
              onChange={((e, value) => handlePageChange(value))}
              count={10}
              variant="outlined"
              color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
