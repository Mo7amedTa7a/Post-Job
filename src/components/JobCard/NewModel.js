import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Skill = styled(Box)(({ theme, included }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(0.75),
  border: `2px solid ${theme.palette.secondary.main}`,
  fontSize: "14px",
  borderRadius: "5px",
  fontWeight: 600,
  cursor: "pointer",
  color: theme.palette.secondary.main,
  "&:hover": {
    background: theme.palette.secondary.main,
    color: "#fff",
  },
  ...(included && {
    background: theme.palette.secondary.main,
    color: "#fff",
  }),
}));

const initState = {
  title: "",
  type: "Full Time",
  companyName: "",
  companyUrl: "",
  location: "Remote",
  Link: "",
  describe: "",
  skills: [],
};

const NewModel = (props) => {
  const [jobDetail, setJobDetail] = useState(initState);
  const handleChange = (e) => {
    e.preventDefault();
    setJobDetail((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobDetail.skills.length) return;
    await props.postJob(jobDetail);

    props.closeModel();
    await Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true,
    });
  };

  const addRemoveSkills = (skill) =>
    setJobDetail((oldState) => ({
      ...oldState,
      skills: oldState.skills.includes(skill)
        ? oldState.skills.filter((s) => s !== skill)
        : [...oldState.skills, skill],
    }));
  const skills = ["Java", "Node", "Vue", "React", "SQL", "Mongo"];
  return (
    <Dialog open={props.newModel}>
      <DialogTitle>
        <Box display={"flex"} justifyContent="space-between">
          <Typography>Post Job</Typography>
          <IconButton onClick={props.closeModel}>
            {" "}
            <Close />{" "}
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              placeholder="Job Title"
              disableUnderline
              fullWidth
              name="title"
              value={jobDetail.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              variant="filled"
              autoComplete="off"
              disableUnderline
              defaultValue={"Full Time"}
              fullWidth
              name="type"
              value={jobDetail.type}
              onChange={handleChange}
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              placeholder="Company Name"
              disableUnderline
              fullWidth
              name="companyName"
              value={jobDetail.companyName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              placeholder="Company URL"
              disableUnderline
              fullWidth
              name="companyUrl"
              value={jobDetail.companyUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              variant="filled"
              autoComplete="off"
              disableUnderline
              fullWidth
              defaultValue={"Remote"}
              name="location"
              value={jobDetail.location}
              onChange={handleChange}
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In Office">In Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              placeholder="Job Link"
              disableUnderline
              fullWidth
              name="Link"
              value={jobDetail.Link}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              autoComplete="off"
              placeholder="Job Description"
              disableUnderline
              multiline
              rows={3}
              fullWidth
              name="describe"
              value={jobDetail.describe}
              onChange={handleChange}
            />
          </Grid>
          <Box>
            <Typography>Skills</Typography>
            <Box display={"flex"}>
              {skills.map((skill) => (
                <Skill
                  key={"skill"}
                  onClick={() => addRemoveSkills(skill)}
                  included={jobDetail.skills.includes(skill)}
                >
                  {skill}
                </Skill>
              ))}
            </Box>
          </Box>
          <DialogContent>
            <DialogActions>
              <Box
                width={"100%"}
                color={"red"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography>Requiresd Fieleds </Typography>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  disableElevation
                  color="primary"
                >
                  Post Job
                </Button>
              </Box>
            </DialogActions>
          </DialogContent>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default NewModel;
