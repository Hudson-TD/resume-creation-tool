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

  const [currentSection, setCurrentSection] = useState("General Information");

  const [generalData, setGeneralData] = useState({});

  const [educationList, setEducationList] = useState([]);

  function handleSectionChange(e) {
    let newSection = e.target.getAttribute("data-section");
    setCurrentSection(newSection);
  }

  function handleSectionSave(e) {
    let nextSection = e.target.getAttribute("data-next");
    setCurrentSection(nextSection);
  }

  function handleGeneralSave(formikObj) {
    const newGeneralEntry = formikObj;
    setGeneralData({ newGeneralEntry });
  }

  function handleEducationSave(formikObj) {
    const newEducationEntry = formikObj;
    setEducationList([...educationList, newEducationEntry]);
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
          formData={generalData}
          onSave={handleGeneralSave}
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
