import cardStyles from "../styling/Card.module.css";

function EducationCard({ data }) {
  return (
    <div className={cardStyles["education-card"]}>
      <p className={cardStyles["education-card-item"]}>{data.institute}</p>
      <p className={cardStyles["education-card-item"]}>{data.educationLevel}</p>
      <p className={cardStyles["education-card-item"]}>{data.major}</p>
      <p className={cardStyles["education-card-item"]}>{data.startDate}</p>
      <p className={cardStyles["education-card-item"]}>{data.graduationDate}</p>
    </div>
  );
}

export default EducationCard;
