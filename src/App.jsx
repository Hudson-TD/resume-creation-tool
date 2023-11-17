import { useState } from "react";
import Header from "./components/Header";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import UserEducation from "./components/UserEducation";
import Review from "./components/Review";

function App() {
  const [currentSection, setCurrentSection] = useState("General Information");

  const [generalData, setGeneralData] = useState({});

  const [educationList, setEducationList] = useState([]);

  function handleSectionChange(e) {
    let newSection = e.target.getAttribute("data-section");
    setCurrentSection(newSection);
  }

  function handleSectionSave(nextSection) {
    setCurrentSection(nextSection);
  }

  function handleGeneralSave(formikObj) {
    const newGeneralEntry = { ...formikObj };
    setGeneralData({ ...newGeneralEntry });
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
          onGeneralSave={handleGeneralSave}
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
      {currentSection === "Review & Download" && (
        <Review generalData={generalData} />
      )}
    </>
  );
}

export default App;
