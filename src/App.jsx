import { useState } from "react";
import Header from "./components/Header";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import UserEducation from "./components/UserEducation";

function App() {
  const generalFormLayout = [
    {
      label: "First Name *",
      name: "firstName",
      type: "text",
      id: 0,
    },
    {
      label: "Last Name *",
      name: "lastName",
      type: "text",
      id: 1,
    },
    { label: "Email Address *", name: "emailAddress", id: 2 },
    {
      label: "Phone Number *",
      name: "phoneNumber",
      type: "tel",
      id: 3,
    },
    {
      label: "Social Media Link 1 (optional)",
      name: "smOne",
      type: "url",
      id: 4,
    },
    {
      label: "Social Media Link 2 (optional)",
      name: "smTwo",
      type: "url",
      id: 5,
    },
    {
      label: "Social Media Link 3 (optional)",
      name: "smThree",
      type: "url",
      id: 6,
    },
  ];

  const educationFormLayout = [
    {
      fieldTag: "Input",
      label: "Institute Name *",
      name: "institute",
      type: "text",
      id: 0,
    },
    {
      fieldTag: "Select",
      label: "Education Level *",
      name: "educationLevel",
      options: [
        "null",
        "High School Diploma",
        "Associate",
        "Bachelor's",
        "Master's",
        "Doctorate",
      ],
      id: 1,
    },
    { fieldTag: "Input", label: "Major *", name: "major", id: 2 },
    {
      fieldTag: "Input",
      label: "Start Date *",
      name: "startDate",
      type: "date",
      id: 3,
    },
    {
      fieldTag: "Input",
      label: "Graduation Date *",
      name: "graduationDate",
      type: "date",
      id: 4,
    },
    {
      fieldTag: "Input",
      label: "Accolade 1 (optional)",
      name: "accoladeOne",
      type: "text",
      id: 5,
    },
    {
      fieldTag: "Input",
      label: "Accolade 2 (optional)",
      name: "accoladeTwo",
      type: "text",
      id: 6,
    },
    {
      fieldTag: "Input",
      label: "Accolade 3 (optional)",
      name: "accoladeThree",
      type: "text",
      id: 7,
    },
  ];

  const [currentSection, setCurrentSection] = useState("General Information");

  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    smOne: "",
    smTwo: "",
    smThree: "",
  });

  // const [educationData, setEducationData] = useState({
  //   institute: "",
  //   educationLevel: "",
  //   major: "",
  //   startDate: "",
  //   graduationDate: "",
  //   accoladeOne: "",
  //   accoladeTwo: "",
  //   accoladeThree: "",
  // });

  const [educationList, setEducationList] = useState([]);

  function handleSectionChange(e) {
    let newSection = e.target.getAttribute("data-section");
    setCurrentSection(newSection);
  }

  function handleSectionSave(e) {
    let nextSection = e.target.getAttribute("data-next");
    setCurrentSection(nextSection);
  }

  function handleGeneralUpdate(e) {
    const value = e.target.value;
    setGeneralData({
      ...generalData,
      [e.target.name]: value,
    });
  }

  // function handleEducationUpdate(e) {
  //   const value = e.target.value;
  //   setEducationData({
  //     ...educationData,
  //     [e.target.name]: value,
  //   });
  // }

  function handleEducationSave(formikObj) {
    const newEntry = formikObj;
    setEducationList([...educationList, newEntry]);
  }

  return (
    <>
      <Header
        onChange={handleSectionChange}
        currentSection={currentSection}
        className={"w-75"}
      />
      {currentSection === "General Information" && (
        <GeneralForm
          layout={generalFormLayout}
          formData={generalData}
          onChange={handleGeneralUpdate}
          onSectionSave={handleSectionSave}
        />
      )}
      <br />
      {currentSection === "Education" && (
        <div className={"d-flex"}>
          <EducationForm
            onSave={handleEducationSave}
            dataList={educationList}
          />
          <UserEducation
            dataList={educationList}
            onSectionSave={handleSectionSave}
          />
        </div>
      )}
    </>
  );
}

export default App;
