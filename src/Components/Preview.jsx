import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload, FaHistory } from "react-icons/fa";
import Edit from './Edit';

function Preview({ userInput,finish }) {
  const { personalData, education, summary, professional, skills } = userInput;

  return (
    <>
     {
      userInput.personalData.name!=""&&
      <div className='flex flex-column'>
       {finish &&
       <Stack direction={'row'} sx={{ marginTop: '50px', justifyContent: 'flex-end' }} style={{marginTop:'100px'}} className='my-5'>
        <Stack direction="row" spacing={2}>
          <button className="btn fs-1" style={{ color: 'purple' }}>
            <FaFileDownload />
          </button>
          <div><Edit /></div>
          <Link to="/History" className="btn fs-1" style={{ color: 'purple' }}>
            <FaHistory />
          </Link>
          <Link to="/resume" className="btn fs-1" style={{ color: 'purple' }}>
            Back
          </Link>
        </Stack>
      </Stack>}
      

      {/* Resume preview section */}
      <Box component="section">
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
          {/* Name + Job Title */}
          <h2>{personalData?.name || "Your Name"}</h2>
          <h5>{personalData?.jobTitle || "Job Title"}</h5>
          <p>{personalData?.location || "Location"}</p>

          {/* Contact links */}
          <p>
            {personalData?.github && <Link to={personalData.github}>GITHUB</Link>}{" "}
            {personalData?.linkedin && <> | <Link to={personalData.linkedin}>LINKEDIN</Link></>}{" "}
            {personalData?.portfolio && <> | <Link to={personalData.portfolio}>PORTFOLIO</Link></>}
          </p>

          {/* Summary */}
          <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
          <p className="fs-5 text-start">
            {summary || "Write a short summary about yourself..."}
          </p>

          {/* Education */}
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
          <h5>{education?.course || "Course Name"}</h5>
          <p>
            {education?.college || "College Name"} |{" "}
            {education?.university || "University"} |{" "}
            {education?.year || "Year"}
          </p>

          {/* Professional Experience */}
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
          <h5>{professional?.jobType || "Job / Internship"}</h5>
          <p>
            <span>{professional?.companyName || "Company"}</span> |{" "}
            <span>{professional?.companyLocation || "Location"}</span> |{" "}
            <span>{professional?.duration || "Duration"}</span>
          </p>

          {/* Skills */}
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
          <Stack
            spacing={2}
            direction="row"
            sx={{ flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
          >
            {skills && skills.length > 0 ? (
              skills.map((skill, index) => (
                <Button key={index} variant="contained">{skill}</Button>
              ))
            ) : (
              <p>No skills added yet</p>
            )}
          </Stack>
        </Paper>
      </Box>
      </div>
     }
    </>
  );
}

export default Preview;
  