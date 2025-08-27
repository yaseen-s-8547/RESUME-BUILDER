import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from 'react-icons/md';

function History() {
  return (
    <div>
      <h1 className="text-center my-4">Downloaded Resume History</h1>

      {/* Back button aligned properly */}
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-primary">
          BACK
        </Link>
      </div>

      <Box component="section" className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
              
              {/* Header: Date + Delete */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 text-muted">
                  Reviewed At: <span className="fw-bold">24/6/2025, 7:22:27</span>
                </h6>
                <button className="btn text-danger fs-4">
                  <MdDelete />
                </button>
              </div>

              {/* User Info */}
              <h2 className="fw-bold mb-3">John Doe</h2>
              <p>
                <Link to="/" className="me-2">GITHUB</Link> | 
                <Link to="/" className="mx-2">LINKEDIN</Link> | 
                <Link to="/" className="ms-2">PORTFOLIO</Link>
              </p>

              {/* Summary */}
              <Divider sx={{ fontSize: '20px', my: 2 }}>Summary</Divider>
              <p className="fs-6 text-start">User Summary</p>

              {/* Education */}
              <Divider sx={{ fontSize: '20px', my: 2 }}>Education</Divider>
              <h5 className="fw-bold">B.Tech - Computer Science</h5>
              <p>XYZ University</p>

              {/* Professional Experience */}
              <Divider sx={{ fontSize: '20px', my: 2 }}>Professional Experience</Divider>
              <h5 className="fw-bold">Software Engineer</h5>
              <p>
                <span>ABC Company</span> | <span>New York</span> | <span>2021 - Present</span>
              </p>

              {/* Skills */}
              <Divider sx={{ fontSize: '20px', my: 2 }}>Skills</Divider>
              <Stack
                spacing={1}
                direction="row"
                sx={{ flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}
              >
                <Button size="small" variant="contained">React</Button>
                <Button size="small" variant="contained">Node.js</Button>
                <Button size="small" variant="contained">MongoDB</Button>
              </Stack>

            </Paper>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default History;

