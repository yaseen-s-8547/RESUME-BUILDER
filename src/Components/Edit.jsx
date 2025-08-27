import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="btn fs-1"
        style={{ color: 'purple' }}
      >
        <FaRegEdit />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Edit Resume Details
          </Typography>

          {/* Personal Details */}
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="name" label="Full Name" variant="standard" />
            <TextField id="job" label="Job Title" variant="standard" />
            <TextField id="location" label="Location" variant="standard" />
          </div>

          {/* Contact Details */}
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="email" label="Email" variant="standard" />
            <TextField id="phone" label="Phone Number" variant="standard" />
            <TextField id="github" label="Github Profile Link" variant="standard" />
            <TextField id="linkedin" label="LinkedIn Profile Link" variant="standard" />
            <TextField id="portfolio" label="Portfolio Link" variant="standard" />
          </div>

          {/* Education */}
          <h3>Education</h3>
          <div className="d-flex row p-3">
            <TextField id="course" label="Course Name" variant="standard" />
            <TextField id="college" label="College Name" variant="standard" />
            <TextField id="university" label="University" variant="standard" />
            <TextField id="year" label="Year of Passout" variant="standard" />
          </div>

          {/* Professional Details */}
          <h3>Professional Details</h3>
          <div className="d-flex row p-3">
            <TextField id="jobType" label="Job or Internship" variant="standard" />
            <TextField id="companyName" label="Company Name" variant="standard" />
            <TextField id="companyLocation" label="Company Location" variant="standard" />
            <TextField id="role" label="Role / Position" variant="standard" />
            <TextField id="duration" label="Duration" variant="standard" />
          </div>

          {/* Skills */}
          <h3>Skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3">
            <TextField sx={{ width: 400 }} id="standard-basic-skill" label="Add Skills" variant="standard" />
            <Button variant="text">ADD</Button>
          </div>
          <h5>Added Skills :</h5>
          <div className="d-flex flex-wrap justify-content my-3">
            <span className='btn btn-primary'>
              REACT <button className="text-light btn">X</button>
            </span>
          </div>

          {/* Summary */}
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3">
            <TextField
              id="summary"
              label="Write a short summary of yourself"
              multiline
              rows={4}
              fullWidth
            />
          </div>

          {/* Update Button */}
          <Button variant="contained" color="primary" onClick={handleClose}>
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
