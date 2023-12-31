import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

function DataCardContainer({
  dataList,
  onSectionSave,
  handleEntryDelete,
  cardType,
}) {
  if (cardType === "education") {
    return (
      <div
        className={
          "w-100 d-flex flex-column justify-content-start align-items-center"
        }
      >
        <h1 className={"py-3"}>
          {dataList.length} / 3 Entries Used{" "}
          <span>
            <button
              type="button"
              className="btn btn-light rounded-right"
              data-toggle="tooltip"
              data-placement="top"
              title="1 entry required, total entries limited to 3 for formatting purposes"
            >
              ?
            </button>
          </span>
        </h1>
        <div
          className={
            "w-100 d-flex flex-column justify-content-center align-items-center"
          }
        >
          {dataList.map((dataEntry, index) => {
            return (
              <EducationCard
                key={index}
                data={dataEntry}
                handleEntryDelete={handleEntryDelete}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center py-3">
          <button
            type="button"
            data-section="Work Experience"
            disabled={dataList.length >= 1 ? false : true}
            onClick={onSectionSave}
            className={"btn btn-primary px-5"}
          >
            Continue
          </button>
        </div>
      </div>
    );
  } else if (cardType === "experience") {
    return (
      <div
        className={
          "w-100 d-flex flex-column justify-content-start align-items-center"
        }
      >
        <h1 className={"py-3"}>
          {dataList.length} / 5 Entries Used{" "}
          <span>
            <button
              type="button"
              className="btn btn-light rounded-right"
              data-toggle="tooltip"
              data-placement="top"
              title="Placeholder"
            >
              ?
            </button>
          </span>
        </h1>
        <div
          className={
            "w-100 d-flex flex-column justify-content-center align-items-center"
          }
        >
          {dataList.map((dataEntry, index) => {
            return (
              <ExperienceCard
                key={index}
                data={dataEntry}
                handleEntryDelete={handleEntryDelete}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center py-3">
          <button
            type="button"
            data-section="Review"
            onClick={onSectionSave}
            className={"btn btn-primary px-5"}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default DataCardContainer;
