import EducationCard from "./EducationCard";
import cardStyles from "../styling/Card.module.css";

function UserEducation({ dataList }) {
  return (
    <>
      <div className={cardStyles["education-cards-container"]}>
        {dataList.map((dataEntry, index) => {
          return <EducationCard key={index} data={dataEntry} />;
        })}
      </div>
    </>
  );
}

export default UserEducation;
