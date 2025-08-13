import React from 'react'
import Step from '../Components/Step'
import Preview from '../Components/Preview'

function Userform() {
  return (
    <>
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
          <Step/>
        </div>
        <div className="col-6">
          <Preview/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Userform