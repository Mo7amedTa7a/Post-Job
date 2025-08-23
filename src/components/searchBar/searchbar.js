import styled from "@emotion/styled";
import { Box, Button, MenuItem, Select } from "@mui/material";
import React from "react";

const Wrapper = styled(Box)({
  background: "#fff",
  display: "flex",
  boxShadow: "0 1px 5px rgba(0, 0, 0, .1)",
  borderRadius: "5",
  "& > *": {
    flex: "1",
    height: "45px",
    margin: "8px",
  },
});

const jobCard = () => {
  return (
    <Wrapper p={2} mt={-5}>
      <Select disableUnderline variant="filled" defaultValue={"All"}>
        <MenuItem value="All">All</MenuItem>
        {/* <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem> */}
      </Select>
      <Select disableUnderline variant="filled" defaultValue={"All"}>
        <MenuItem value="All">All</MenuItem>
        {/* <MenuItem value="In office">In office</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem> */}
      </Select>
      <Button color="primary" variant="contained" disableElevation>
        Search
      </Button>
    </Wrapper>
  );
};

export default jobCard;
