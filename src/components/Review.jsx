function Review({ generalData }) {
  return (
    <div>
      <p>{generalData.firstName}</p>
      <p>{generalData.lastName}</p>
      <p>{generalData.emailAddress}</p>
      <p>{generalData.phoneNumber}</p>
      <p>{generalData.smOne}</p>
      <p>{generalData.smTwo}</p>
      <p>{generalData.smThree}</p>
    </div>
  );
}

export default Review;
