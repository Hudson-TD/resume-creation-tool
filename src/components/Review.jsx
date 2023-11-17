function Review({ generalData, educationData }) {
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
    </>
  );
}

export default Review;
