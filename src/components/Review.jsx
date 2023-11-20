function Review({ generalData, educationData, experienceData }) {
  return (
    <>
      <div className="form-control mb-5">
        <p>{generalData.firstName}</p>
        <p>{generalData.lastName}</p>
        <p>{generalData.emailAddress}</p>
        <p>{generalData.phoneNumber}</p>
        <p>{generalData.smOne}</p>
        <p>{generalData.smTwo}</p>
        <p>{generalData.smThree}</p>
      </div>

      <div>
        {educationData.map((entry) => {
          return (
            <div className="form-control mb-5">
              <p>{entry.institute}</p>
              <p>{entry.educationLevel}</p>
              <p>{entry.major}</p>
              <p>{entry.startDate}</p>
              <p>{entry.graduationDate}</p>
              <p>{entry.accoladeOne}</p>
              <p>{entry.accoladeTwo}</p>
              <p>{entry.accoladeThree}</p>
            </div>
          );
        })}
      </div>

      <div>
        {experienceData.map((entry) => {
          return (
            <div className="form-control mb-5">
              <p>{entry.companyName}</p>
              <p>{entry.title}</p>
              <p>{entry.startDate}</p>
              <p>{entry.endDate}</p>
              <p>{entry.achievementOne}</p>
              <p>{entry.achievementTwo}</p>
              <p>{entry.achievementThree}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Review;
