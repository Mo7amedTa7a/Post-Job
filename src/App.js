import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import Header from "./components/Header/Header";
import { Grid } from "@mui/material";
import Searchbar from "./components/searchBar/searchbar";
import jobData from "./dummyData";
import JobCard from "./components/JobCard";
import NewModel from "./components/JobCard/NewModel";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { fireStore } from "./firebase/config";


function App() {
  const [jobs, setJobs] = useState([]);
  const postJob = async (jobDetail) => {
    try {
      await addDoc(collection(fireStore, "jobs"), {
        ...jobDetail,
        postedOn: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getJobs = async (filters = {}) => {
  const jobCollection = collection(fireStore, 'jobs');
  let jobsQuery = jobCollection;

  // البحث حسب الموقع أو النوع
  if (filters.location || filters.type) {
    jobsQuery = query(jobCollection, ...Object.entries(filters).map(([key, value]) => where(key, '==', value)));
  }

  const querySnab = await getDocs(jobsQuery);
  const tempJobs = querySnab.docs.map((job) => {
    const jobData = job.data();
    const postedOn = jobData.postedOn ? jobData.postedOn.toDate() : new Date(); // التحقق من وجود postedOn
    return { ...jobData, id: job.id, postedOn };
  });

  setJobs(tempJobs.sort((a, b) => b.postedOn - a.postedOn)); // ترتيب الوظائف حسب تاريخ النشر
};


 
    getJobs();

  const [newModel, setNewModel] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Header openModel={() => setNewModel(true)} />
      <NewModel
        postJob={postJob}
        newModel={newModel}
        closeModel={() => setNewModel(false)}
      />
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Searchbar />
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
