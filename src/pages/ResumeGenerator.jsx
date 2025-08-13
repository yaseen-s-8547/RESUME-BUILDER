import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"; // Step 1 icon
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResumeGenerator() {
  return (
    <section>
      <div className="container text-center py-5">
        <h2 className="mb-5">Create a job-winning Resume in minutes</h2>

        <div className="row justify-content-center">
          {/* Step 1 */}
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <FaRegFileAlt size={50} className="text-primary" />
                <h5 className="mt-3">Add your information</h5>
                <p className="text-muted">
                  Add pre-written examples to each section
                </p>
                <strong>Step 1</strong>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <FaFileDownload size={50} className="text-danger" />
                <h5 className="mt-3">Download your Resume</h5>
                <p className="text-muted">Download and start applying</p>
                <strong>Step 2</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-center align-item-center mb-5">
       <Link to={'/Userform'}>
        <button className="btn btn-primary btn-lg">Let’s Start</button>
       </Link>
      </div>
    </section>
  )
}

export default ResumeGenerator