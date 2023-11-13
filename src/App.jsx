import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";

function App() {
  const generalFormLayout = [
    { label: "First Name", name: "firstName", type: "text", id: 0 },
    { label: "Last Name", name: "lastName", type: "text", id: 1 },
    { label: "Email Address", name: "emailAddress", id: 2 },
    { label: "Phone Number", name: "phoneNumber", type: "tel", id: 3 },
  ];

  const educationFormLayout = [
    {
      fieldTag: "Input",
      label: "Institute Name",
      name: "institute",
      type: "text",
      id: 0,
    },
    {
      fieldTag: "Select",
      label: "Education Level",
      name: "educationLevel",
      options: [
        "High School Diploma",
        "Associate",
        "Bachelor's",
        "Master's",
        "Doctorate",
      ],
      id: 1,
    },
    { fieldTag: "Input", label: "Major", name: "major", id: 2 },
    {
      fieldTag: "Input",
      label: "Start Date",
      name: "startDate",
      type: "date",
      id: 3,
    },
    {
      fieldTag: "Input",
      label: "Graduation Date",
      name: "graduationDate",
      type: "date",
      id: 4,
    },
  ];

  const [generalData, setGeneralData] = useState({
    firstName: "1",
    lastName: "2",
    emailAddress: "3",
    phoneNumber: "4",
  });

  const [educationData, setEducationData] = useState({
    institute: "",
    educationLevel: "",
    major: "",
    startDate: "",
    graduationDate: "",
  });

  const [educationList, setEducationList] = useState([]);

  function handleGeneralUpdate(e) {
    const value = e.target.value;
    setGeneralData({
      ...generalData,
      [e.target.name]: value,
    });
  }

  function handleEducationUpdate(e) {
    const value = e.target.value;
    setEducationData({
      ...educationData,
      [e.target.name]: value,
    });
  }

  function handleEducationSave(e) {
    e.preventDefault();
    console.log("Triggered");
    const newEntry = educationData;
    setEducationList([...educationList, newEntry]);
  }

  return (
    <>
      <GeneralForm
        layout={generalFormLayout}
        formData={generalData}
        onChange={handleGeneralUpdate}
      />
      <br />
      <EducationForm
        layout={educationFormLayout}
        formData={educationData}
        formList={educationList}
        onChange={handleEducationUpdate}
        onSave={handleEducationSave}
      />
    </>
  );
}

export default App;
