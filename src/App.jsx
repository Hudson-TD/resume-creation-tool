import { useState } from "react";
import Header from "./components/Header";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import DataCardContainer from "./components/DataCardContainer";
import ExperienceForm from "./components/ExperienceForm";
import Review from "./components/Review";

function App() {
  const [currentSection, setCurrentSection] = useState("General Information");
  const [generalData, setGeneralData] = useState({});
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

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

  function handleExperienceSave(formikObj) {
    const newExperienceEntry = formikObj;
    setExperienceList([...experienceList, newExperienceEntry]);
  }

  function handleEntryDelete(e) {
    let filterVal = e.target.value;
    let newArray = educationList.filter((item) => {
      return item.institute !== filterVal;
    });

    setEducationList([...newArray]);
  }

  return (
    <div className="d-flex vh-100 vw-100">
      <div className="vh-100 w-20">
        <Header
          onChange={handleSectionChange}
          currentSection={currentSection}
        />
      </div>
      <div className="w-75">
        {currentSection === "General Information" && (
          <GeneralForm
            formData={generalData}
            onGeneralSave={handleGeneralSave}
            onSectionSave={handleSectionSave}
          />
        )}
        {currentSection === "Education" && (
          <div className={"d-flex"}>
            <EducationForm
              onSave={handleEducationSave}
              dataList={educationList}
            />
            <DataCardContainer
              dataList={educationList}
              onSectionSave={handleSectionSave}
              handleEntryDelete={handleEntryDelete}
            />
          </div>
        )}
        {currentSection === "Work Experience" && (
          <div className={"d-flex"}>
            <ExperienceForm
              dataList={experienceList}
              onSave={handleExperienceSave}
            />
          </div>
        )}
        {currentSection === "Review & Download" && (
          <Review generalData={generalData} educationData={educationList} />
        )}
      </div>
    </div>
  );
}

export default App;
