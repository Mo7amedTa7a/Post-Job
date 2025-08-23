import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { differenceInMinutes } from "date-fns";
import React from "react";

const Wrapper = styled(Box)({
  border: "1px solid #e8e8e8",
  cursor: "pointer",
  transition: ".3s",
  "&:hover": {
    boxShadow: " 0 5px 25px rgba(0,0,0,.1)",
    borderLeft: "6px solid #4D64E4",
  },
});

const CompanyName = styled(Typography)(({ theme }) => ({
  borderRadius: "5px",
  fontSize: "13px",
  display: "inline-block",
  fontWeight: 600,
  background: theme.palette.primary.main,
  padding: theme.spacing(0.75),
}));

const Skills = styled(Typography)(({ theme }) => ({
  color: "#fff",
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: 600,
  margin:theme.spacing(.5),
  background: theme.palette.secondary.main,
  padding: theme.spacing(0.75),
}));

const Index = (props) => {
  return (
    <Wrapper p={2}>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <CompanyName variant="subtitle2">{props.companyName}</CompanyName>
        </Grid>
        <Grid item container xs>
          {props.skills.map((skill) => (
            <Skills key={skill}>{skill}</Skills>
          ))}
        </Grid>
        <Grid item container xs direction={"column"} alignItems={"flex-end"}>
          <Grid item>
            <Typography variant="caption">
              {differenceInMinutes(Date.now(), props.postedOn)} min ago |
              {props.location} | {props.type}
            </Typography>
          </Grid>
          <Grid item>
            <Box  mt={2}>
              <Button variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Index;
