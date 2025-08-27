import React, { useState } from "react";
import Preview from "../Components/Preview";
import Steps from "../Components/Steps";

function Userform() {
  const [userInput, setUserInput] = useState({
    personalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    education: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    skills: [],
    summary: "",
    professional: {
      jobType: "",
      companyName: "",
    },
  });
  //state for finishh
  const [finish,setFinish]=useState(false)


  return (

   <>{
    finish?
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-item-center">
      <Preview userInput={userInput}/>

    </div>
    :
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
          <Steps userInput={userInput} setUserInput={setUserInput}  setFinish={setFinish}/>
        </div>
        <div className="col-6">
          <Preview userInput={userInput} finish={finish} />
        </div>
      </div>
    </div>
   }
   </>
  );
}

export default Userform;
