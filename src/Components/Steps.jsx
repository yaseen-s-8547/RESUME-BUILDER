import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { addResumeAPI } from "../Services/allAPI";
import swal from 'sweetalert';

const steps = [
  "Basic Information",
  "Contact Details",
  "Education Details",
  "Work Experience",
  "Certifications",
  "Review and Submit",
];

function Steps({ userInput, setUserInput,setFinish  }) {
  const skillsSuggestionArray = [
    "NODE JS",
    "EXPRESS",
    "MONGO DB",
    "REACT",
    "ANGULAR",
    "NEXT JS",
    "BOOTSTRAP",
    "TAILWIND",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const userSkillRef = React.useRef();

  // step helpers
  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => new Set(prevSkipped).add(activeStep));
  };

  const handleReset = () => setActiveStep(0);

  // skills logic
  const addSkill = (skill) => {
    if (!skill) return;
    if (userInput.skills.includes(skill)) {
      alert("Skill already exists!");
      return;
    }
    setUserInput({ ...userInput, skills: [...userInput.skills, skill] });
    if (userSkillRef.current) userSkillRef.current.value = "";
  };

  const removeSkill = (skill) => {
    setUserInput({
      ...userInput,
      skills: userInput.skills.filter((item) => item !== skill),
    });
  };

  // step content renderer
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h3>Personal Details</h3>
            <div className="d-flex row p-3">
              <TextField
                label="Full Name"
                variant="standard"
                value={userInput.personalData.name}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalData: {
                      ...userInput.personalData,
                      name: e.target.value,
                    },
                  })
                }
              />
              <TextField
                label="Job Title"
                variant="standard"
                value={userInput.personalData.jobTitle}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalData: {
                      ...userInput.personalData,
                      jobTitle: e.target.value,
                    },
                  })
                }
              />
              <TextField
                label="Location"
                variant="standard"
                value={userInput.personalData.location}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalData: {
                      ...userInput.personalData,
                      location: e.target.value,
                    },
                  })
                }
              />
            </div>
          </>
        );

      case 1:
        return (
          <>
            <h3>Contact Details</h3>
            <div className="d-flex row p-3">
              {["email", "phone", "github", "linkedin", "portfolio"].map(
                (field) => (
                  <TextField
                    key={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    variant="standard"
                    value={userInput.personalData[field]}
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        personalData: {
                          ...userInput.personalData,
                          [field]: e.target.value,
                        },
                      })
                    }
                  />
                )
              )}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h3>Education</h3>
            <div className="d-flex row p-3">
              {["course", "college", "university", "year"].map((field) => (
                <TextField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  variant="standard"
                  value={userInput.education[field]}
                  onChange={(e) =>
                    setUserInput({
                      ...userInput,
                      education: {
                        ...userInput.education,
                        [field]: e.target.value,
                      },
                    })
                  }
                />
              ))}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h3>Professional Details</h3>
            <div className="d-flex row p-3">
              <TextField label="Job or Internship" variant="standard" />
              <TextField label="Company Name" variant="standard" />
              <TextField label="Company Location" variant="standard" />
              <TextField label="Role / Position" variant="standard" />
              <TextField label="Duration" variant="standard" />
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h3>Skills</h3>
            <div className="d-flex align-items-center p-3">
              <input ref={userSkillRef} placeholder="Add Skill" />
              <Button onClick={() => addSkill(userSkillRef.current.value)}>
                ADD
              </Button>
            </div>
            <h5>Suggestions:</h5>
            <div className="d-flex flex-wrap my-3">
              {skillsSuggestionArray.map((s) => (
                <Button key={s} onClick={() => addSkill(s)} className="m-1">
                  {s}
                </Button>
              ))}
            </div>
            <h5>Added Skills:</h5>
            <div className="d-flex flex-wrap my-3">
              {userInput.skills.length > 0 ? (
                userInput.skills.map((s) => (
                  <span key={s} className="btn btn-primary m-1">
                    {s}
                    <button
                      className="btn btn-sm text-light"
                      onClick={() => removeSkill(s)}
                    >
                      X
                    </button>
                  </span>
                ))
              ) : (
                <span>NILL</span>
              )}
            </div>
          </>
        );

      case 5:
        return (
          <>
            <h3>Professional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
                label="Write a short summary of yourself"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={userInput.summary}
                onChange={(e) =>
                  setUserInput({ ...userInput, summary: e.target.value })
                }
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };
  const handleAddResume=async ()=>{
    
    const{name,jobTitle,location}=userInput.personalData
      if(name && jobTitle && location){
        //alert("API called")
        try{
         const  result=await addResumeAPI(userInput)
         console.log(result)
         swal("success!", "resume added successfully", "success");
         setFinish(true)
        }catch(err){
          swal("error", "failed", "error");
        }
      }else{
        alert("fill the form")
      }
    


  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}: {steps[activeStep]}
          </Typography>

          <Box>{renderStepContent(activeStep)}</Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
             {activeStep === steps.length - 1 ? 
             <Button onClick={handleAddResume}>Finish</Button> :
             <Button onClick={handleNext}>Next</Button>}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Steps;
